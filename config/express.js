'use strict';

var config = require('./config'),
    fs = require('fs'),
    express = require('express'),
    mongodb = require('mongodb'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    passport = require('passport');

module.exports = function() {

    var app = express();

    //Usar la varible 'NODE_ENV' para activar los middlware 'morgan' logger o 'compress'
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.locals.cssFiles = function() {
        var output = this.getGlobbedFiles(this.assets.lib.css.concat(this.assets.css), 'public/');
        return output;
    }



    //configurar el middleware 'body-parser' y el 'method-override'
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    //configurar el middleware 'session''
    app.use(session({
        saveUninitializaed: true,
        resave: true,
        secret: config.sessionSecreta
    }))

    // configurar la session de 'passport'
    app.use(passport.initialize());
    app.use(passport.session());

    // conectar 'flash' para mensajes flash
    //app.use(flash());

    //Configuarar el motor view de la aplicacion y el directorio de 'views'
    app.set('views', './app/views');
    app.set('view engine', config.templateEngine);

    //Cargar los archivos de enrutamiento
    require('../app/routes/index.server.routes.js')(app);
    //require('../app/routes/user.server.routes.js')(app);

    //Configurar el serviddor de archivos estáticos
    app.use(express.static('./public'));

    //Devolver la instancia de la aplicación Express
    return app;
}
