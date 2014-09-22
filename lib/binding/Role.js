var Entity = require('./Entity').Entity;
var User = require('./User').User;
var Set = require('../collection').Set;

var Role;

/**
 * @mixin jspa.binding.Role
 * @mixes jspa.binding.Entity
 */
exports.Role = Role = Entity.inherit(/** @lends jspa.binding.Role.prototype */ {

  /**
   * A set of users which have this role
   * @type jspa.Set
   */
  users: null,

  /**
   * The name of the role
   * @type String
   */
  name: null,

  /**
   * Initialize the Role object
   */
  initialize: function() {
    this.users = new Set();
  },

  /**
   * Test if the given user has this role
   * @return {Boolean} <code>true</code> if the given user has this role,
   * otherwise <code>false</code>
   */
  hasUser: function(user) {
    return this.users.has(user);
  },

  /**
   * Add the given user to this role
   * @param {jspa.binding.User} user The user to add
   */
  addUser: function(user) {
    if (User.isInstance(user)) {
      this.users.add(user);
    } else {
      throw new Error('Only user instances can be added to a role.');
    }
  },

  /**
   * Remove the given user from this role
   * @param {jspa.binding.User} user The user to remove
   */
  removeUser: function(user) {
    if (User.isInstance(user)) {
      this.users.remove(user);
    } else {
      throw new Error('Only user instances can be removed from a role.');
    }
  }

});

