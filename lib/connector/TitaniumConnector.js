var Connector = require('./Connector');

/**
 * @class baqend.connector.TitaniumConnector
 * @extends baqend.connector.Connector
 */
var TitaniumConnector = Connector.inherit(/** @lends baqend.connector.TitaniumConnector.prototype */ {
  /** @lends baqend.connector.TitaniumConnector */
	extend: {
    initialize: function() {
      Connector.connectors.push(this);
    },

    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @param {String} host
     * @param {number} port
     * @param {boolean} secure
     * @returns {boolean}
     */
		isUsable: function(host, port, secure) {
      return typeof Ti != 'undefined' && Ti.Network;
		}
	},

  constructor: function TitaniumConnector() {
    Connector.apply(this, arguments);
  },
	
	/**
	 * @inheritDoc
	 */
	doSend: function(request, receive) {
		var tixhr = Ti.Network.createHTTPClient();
		var url = this.origin + request.path;
	    tixhr.onreadystatechange = function() {
			if (tixhr.readyState == 4) {
				var response = {
					headers: {},
					status : tixhr.status,
					entity:  tixhr.responseText
				};
				Connector.RESPONSE_HEADERS.forEach(function(name) {
					response.headers[name] = tixhr.getResponseHeader(name);
				});
				receive(response);
			}
		};
		tixhr.onerror = function(e) {
			console.log(e);
		};
		tixhr.open(request.method, url, true);
		var entity = request.entity;
		var headers = request.headers;
		for (var name in headers)
			tixhr.setRequestHeader(name, headers[name]);

    tixhr.withCredentials = request.withCredentials;

		tixhr.send(entity);
	}
});

module.exports = TitaniumConnector;