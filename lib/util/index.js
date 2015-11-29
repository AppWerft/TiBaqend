/**
 * @namespace baqend.util
 */

exports.Metadata = require('./Metadata');
exports.Permission = require('./Permission');
exports.Acl = require('./Acl');
exports.Validator = require('./Validator');
exports.ValidationResult = require('./ValidationResult');
exports.Code = require('./Code');
exports.Modules = require('./Modules');
exports.Lockable = require('./Lockable');
//exports.uuid = require('./ti-uuid').v4;
exports.uuid = Ti.Platform.getId();

exports.PushMessage = require('./PushMessage');