'use strict';

module.exports = {
    db: 'mongodb://localhost/mean',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'pug',
    assets: {
        lib: {
            css: [
                '/lib/bootstrap/dist/css/bootstrap.css'
            ],
            js: [
                '/lib/angular/angular.min.js',
                '/lib/angular-resource/angular-resource.min.js',
                '/lib/angular-ui-router/release/angular-ui-router.min.js',


                '/config.js',
                '/application.js',

                '/modules/users/users.client.module.js',
                '/modules/users/config/users.client.routes.js',
                '/modules/users/controllers/authentication.client.controller.js',


            ]
        }
    }
};
