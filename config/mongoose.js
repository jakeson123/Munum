'use strict';

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {

    //usar Mongoose para conectar a MongoDB
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to');
      } else {
      console.log ('Succeeded connected to:');
      }
    });
    //var db = mongoose.createConnection(config.db);

    //cargar el modelo'user'
    require('../app/models/user.server.models');

    //Devolver la instancia de conexion a Mongoose
    return db;
}
