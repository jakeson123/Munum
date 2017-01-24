'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controllers');

    app.route('/auth/signup').post(users.signup);
    app.route('/auth/signout').post(users.signout);
}
