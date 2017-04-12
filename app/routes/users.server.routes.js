'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controllers');

    // Customers Routes
    	app.route('/users')
    		.get(users.list)
    		//.post(users.requiresLogin, customers.create);

    	app.route('/users/:userId')
    		.get(users.read)
        .delete(users.delete);
    		/*.put(users.requiresLogin, customers.hasAuthorization, customers.update)
    		.delete(users.requiresLogin, customers.hasAuthorization, customers.delete);

    	*/


    /*Setting up the users authentication*/
    app.route('/auth/signup').post(users.signup);
    //app.route('/auth/signin').post(users.signin);
    app.route('/auth/signout').get(users.signout);

    // Finish by binding the Customer middleware
    app.param('userId', users.userByID);
}
