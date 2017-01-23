'use strict';

module.exports = {
    db: 'mongodb://localhost/mean',
    port: process.env.PORT || 8080,
    sessionSecreta: 'developmentSessionSecret',
    templateEngine: 'pug',
    assets: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
            ],
            css: [
                'public/modules/**/css/*.css'
            ],
            js: [
                'public/config.js',
                'public/application.js',
                'public/modules/*/*.js'
            ]
        }
    }
};
