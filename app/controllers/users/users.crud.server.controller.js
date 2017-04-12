var _ = require('lodash'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    errorHandler = require('../errors.server.controller'),
    User = mongoose.model('User');

exports.read = function(req, res) {
    res.jsonp(req.User);
};

exports.list = function(req, res) {
    User.find().sort('-created').populate('user', 'displayName').exec(function(err, user) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(user);
        }
    });
};

exports.delete = function(req, res) {
    var user = req.user;
    user.remove(function(err) {

        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(user);
        }
          console.log('hola')
    });
};

exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, function(err, user) {
        if (err) {
            return (next(err));
        } else {
            req.user = user;
            next();
        }
    });
}
