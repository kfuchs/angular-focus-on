'use strict';

angular.module('myApp', ['kf.focusOn'])
    .controller('myCtrl', ['$scope', function($scope) {

        $scope.selectItem = function() {
            $scope.$broadcast('itemSelected');
        };
    }]);