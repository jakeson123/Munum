'use strict';

angular.module('core').controller('SocialController', ['$scope', '$http',
    function($scope, $http) {

        var footerPos = 'up';

        $('#arrowFooterDiv').click(function() {
            if (footerPos == 'down') {
                $('#divFooter').animate({
                    marginTop: "+=68vh",
                }, 500);
                footerPos = 'up';
            }
            else{
                $('#divFooter').animate({
                    marginTop: "-=68vh",
                }, 500);
                footerPos = 'down';
            }
        })

    }
]);
