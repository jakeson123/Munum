'use strict';

angular.module('users').controller('UserListController', ['$scope', '$routeParams', '$http', '$location', '$route', 'Users',
    function($scope, $routeParams, $http, $location, $route, Users) {

        $scope.create = function() {
            var user = new Users({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                roles: 'user',
                sex: 'M'
            });

            user.$save(function(res) {
                alert('registraste el usuario');
            }, function(err) {
                $scope.error = err.data.message;
            });
        };

        $scope.find = function() {
            $scope.users = Users.query();
        }

        $scope.findOne = function(userI) {
            var user = Users.get({
                userId: $routeParams.userId
            });
        };

        $scope.update = function() {
            $scope.user = $update(function() {
                alert('usuario actualizado');
            }, function(err) {
                $scope.error = err.data.message;
            });
        };

        $scope.delete = function(user) {
            $scope.users = Users.query();
            if (user) {
                user.$remove(function() {
                    for (var i in $scope.users) {
                        if ($scope.users[i] === user) {
                            $scope.users.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.user.$remove(function() {
                    alert('usuario borrado');
                });
            }
        };
    }
]);
