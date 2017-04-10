'use strict';

angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/modules/users/views/authentication/signin.client.view.html'
        })
        .state('list', {
            url: '/list',
            templateUrl: '/modules/users/views/userList.client.view.html'
        })
        .state('registro', {
            url: '/auth/signup'
            //templateUrl: '/modules/users/views/authentication/signin.client.view.html'
        });

    }
]);
