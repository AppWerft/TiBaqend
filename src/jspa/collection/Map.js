jspa.collection.Map = jspa.collection.Collection.inherit({
	hasKey: function(key) {
		jspa.util.State.readAccess(this.__jspaEntity__);
		return this.superCall(key);
	},
	
	hasValue: function(value) {
		jspa.util.State.readAccess(this.__jspaEntity__);
		return this.superCall(value);
	},
	
	get: function(key) {
		jspa.util.State.readAccess(this.__jspaEntity__);
		return this.superCall(key);
	},
	
	set: function(key, value) {
		jspa.util.State.writeAccess(this.__jspaEntity__);
		this.superCall(key, value);
	},
	
	removeKey: function(key) {
		jspa.util.State.writeAccess(this.__jspaEntity__);
		this.superCall(key);
	},
	
	removeValue: function(value) {
		jspa.util.State.writeAccess(this.__jspaEntity__);
		this.superCall(value);
	},
	
	keys: function() {
		jspa.util.State.readAccess(this.__jspaEntity__);
		return this.superCall();
	}
});
