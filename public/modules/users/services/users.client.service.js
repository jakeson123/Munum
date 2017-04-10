'use strict'
angular.module('users')
    .factory('Users', ['$resource',
        return $resource('users/:usersId', {
            usersId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    ]);
