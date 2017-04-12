'use strict';

angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('admin', {
                abstract: true,
                //url: '/admin',
                views: {
                    '': {
                        templateUrl: '/modules/core/views/headerAdmin.client.view.html'
                    }
                }
            })
            .state('homeAdmin', {
                parent: 'admin',
                url: '/admin',
                templateUrl: '#'
            })
            .state('presidents', {
                parent: 'admin',
                url: '/admin/presidents',
                templateUrl: '#'
            })
            .state('matrix', {
                parent: 'admin',
                url: '/admin/matrix',
                templateUrl: '#'
            })
            .state('chronometer', {
                parent: 'admin',
                url: '/admin/chronometer',
                templateUrl: '#'
            })
            .state('lister', {
                parent: 'admin',
                url: '/admin/lister',
                templateUrl: '#'
            })
            .state('users', {
                parent: 'admin',
                url: '/admin/users',
                views: {
                  'adminViews': {
                      templateUrl: '/modules/users/views/userList.client.view.html'
                  }
                }
            })
            .state('qr', {
                parent: 'admin',
                url: '/admin/qr',
                templateUrl: '#'
            })

    }
]);
