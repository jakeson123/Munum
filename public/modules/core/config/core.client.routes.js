'use strict';

angular.module('core', ['ui.router']).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

        $stateProvider
            /*static Files*/
            .state('princial', {
                url: '/',
                views: {
                    '': {
                        templateUrl: '/modules/core/views/header.client.view.html'
                    },
                    'login': {
                        templateUrl: '/modules/core/views/login.client.view.html'
                    },
                    'social': {
                        templateUrl: '/modules/core/views/social.client.view.html'
                    }
                }
            })
            .state('home', {
                parent: 'princial',
                url: 'home/home',
                templateUrl: '#'
            })
            .state('about', {
                parent: 'princial',
                url: 'home/about',
                templateUrl: '#'
            })
            .state('log', {
                parent: 'princial',
                url: 'home/log',
                templateUrl: '#'
            })
            .state('agenda', {
                parent: 'princial',
                url: 'home/agenda',
                templateUrl: '#'
            })
            .state('commitees', {
                parent: 'princial',
                url: 'home/commitees',
                templateUrl: '#'
            })
            .state('contact', {
                parent: 'princial',
                url: 'home/contact',
                templateUrl: '#'
            });
    }
]);
