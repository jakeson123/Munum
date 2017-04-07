'use strict';
/*'mongodb://localhost/munum',*/
module.exports = {
    db: 'mongodb://munumuser:123456789@ds155160.mlab.com:55160/munum',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'pug',
    assets: {
        lib: {
            css: [
                '/lib/bootstrap/dist/css/bootstrap.css',
                '/lib/fonts/fontello/css/fontello.css',
                '/modules/core/css/core.css',
                '/modules/core/css/header.css',
                '/modules/core/css/login.css',
                '/modules/core/css/social.css'
            ],
            js: [
                '/lib/jquery/dist/jquery.js',
                '/lib/angular/angular.min.js',
                '/lib/angular-resource/angular-resource.min.js',
                '/lib/angular-ui-router/release/angular-ui-router.min.js',

                '/config.js',
                '/application.js',

                //controladores de core
                '/modules/core/core.client.module.js',
                '/modules/core/config/core.client.routes.js',
                '/modules/core/controllers/header.client.controller.js',
                '/modules/core/controllers/login.client.controller.js',
                '/modules/core/controllers/social.client.controller.js',

                //controladores de usuario
                '/modules/users/users.client.module.js',
                '/modules/users/config/users.client.routes.js',
                '/modules/users/controllers/authentication.client.controller.js'
            ]
        }
    }
};




//db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
