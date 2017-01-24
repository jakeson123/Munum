'use strict';

module.exports = {
    db: 'mongodb://localhost/mean',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'pug',
    assets: {
        lib: {
            css: [
                '/lib/bootstrap/dist/css/bootstrap.css',

                '/modules/core/css/core.css'
            ],
            js: [
                '/lib/jquery/jquery.min.js',
                '/lib/angular/angular.min.js',
                '/lib/angular-resource/angular-resource.min.js',
                '/lib/angular-ui-router/release/angular-ui-router.min.js',

                '/config.js',
                '/application.js',

                //controladores de core
                '/modules/core/core.client.module.js',
                '/modules/core/config/core.client.routes.js',
                '/modules/core/controllers/header.client.controller.js',

                //controladores de usuario
                '/modules/users/users.client.module.js',
                '/modules/users/config/users.client.routes.js',
                '/modules/users/controllers/authentication.client.controller.js'
            ]
        }
    }
};
