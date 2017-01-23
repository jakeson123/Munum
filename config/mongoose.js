'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {

    //usar Mongoose para conectar a MongoDB
    var db = mongoose.connect(config.db);

    //cargar el modelo'user'
    require('../app/models/user.server.models');

    //Devolver la instancia de conexion a Mongoose
    return db;
}
