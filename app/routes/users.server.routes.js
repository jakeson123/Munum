'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controllers');


    /*Setting up the users authentication*/
    app.route('/auth/signup').post(users.signup);
    //app.route('/auth/signin').post(users.signin);
    app.route('/auth/signout').get(users.signout);
}
