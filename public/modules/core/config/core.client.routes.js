'use strict';

angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/modules/core/views/login.client.view.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/modules/core/views/headerAdmin.client.view.html'
        });
    }
]);
