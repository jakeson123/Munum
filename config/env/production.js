'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'pug',
    assets: {
        lib: {
            css: [
                //'/lib/bootstrap/dist/css/bootstrap.css',
                '/lib/foundation/css/foundation.css',
                '/lib/foundation/css/normalize.css',
                '/modules/core/css/core.css'
            ],
            js: [
                '/lib/angular/angular.min.js',
                '/lib/angular-resource/angular-resource.min.js',
                '/lib/angular-ui-router/release/angular-ui-router.min.js',

                '/lib/jquery/dist/jquery.js',
                '/lib/modernizr/modernizr.js',
                '/lib/foundation/js/foundation.min.js',                

                '/config.js',
                '/application.js',

                //controladores de core
                '/modules/core/core.client.module.js',
                '/modules/core/config/core.client.routes.js',
                '/modules/core/controllers/header.client.controller.js',
                '/modules/core/controllers/home.client.controller.js',

                //controladores de usuario
                '/modules/users/users.client.module.js',
                '/modules/users/config/users.client.routes.js',
                '/modules/users/controllers/authentication.client.controller.js'
            ]
        }
    }
};



//db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
