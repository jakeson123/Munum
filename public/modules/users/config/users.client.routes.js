'use strict';

angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/modules/users/views/authentication/signin.client.view.html'
        })
        .state('profile2', {
            url: '/user',
            templateUrl: '/modules/users/views/authentication/signin.client.view.html'
        });
    }
]);
