'use strict';

/*Tener en cuenta el min-width, hacer el condicional*/
angular.module('core').controller('LoginController', ['$scope', '$http',
    function($scope, $http) {

        var asidePos = 'up';

        $('#arrowAsideDiv').click(function() {
            if (asidePos == 'down') {
                $('#divAside').animate({
                    left: "-=17%",
                }, 300);
                asidePos = 'up';
            } else {
                $('#divAside').animate({
                    left: "+=17%",
                }, 300);
                asidePos = 'down';
            }
        })
    }
]);
