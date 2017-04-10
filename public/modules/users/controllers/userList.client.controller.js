'use strict';

angular.module('users').controller('UserListController', ['$scope', '$http', '$location',
	function($scope, $http, $location) {

		$scope.usersList = [
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"},
			{firstName:"Jeisson Fabian", lastName:"Sanchez Gutierrez"}
		];
	}
]);
