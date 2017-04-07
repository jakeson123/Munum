'use strict';

angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/modules/core/views/login.client.view.html'
        });
    }
]);
