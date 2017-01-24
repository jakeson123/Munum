var _ = require('lodash'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    errorHandler = require('../errors.server.controller'),
    User = mongoose.model('User');


exports.signup = function(req, res, next) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;
    if (!req.user) {
        // Init Variables
        var user = new User(req.body);
        var message = null;

        // Add missing user fields
        user.provider = 'local';
        user.displayName = user.firstName + ' ' + user.lastName;

        // Then save the user
        user.save(function(err) {
            if (err) {
                return res.status(400).send({
                    //message: user.displayName
                    message: errorHandler.getErrorMessage(err)
                });
            }
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            /*req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                    return next(err);
                } else {
                    res.json(user);
                }
            });*/
        });
    }
};

exports.signout = function(req, res) {
	req.logout();
	res.redirect('/');
};
