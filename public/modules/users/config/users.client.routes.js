'use strict';

angular.module('users').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.
        state('profile', {
            url: '/',
            templateUrl: 'modules/users/views/authentication/signin.client.view.html'
        });
    }
]);
