'use strict';

angular.module('kf.focusOn', [])


/**
 * @ngdoc directive
 * @name kf.focusOn.directive:focusOn
 * @restrict A
 * @description
 * # focusOn
 *
 * Allows you to easily place focus on an object via broadcasting an event.
 *
 * @example
    <example>
    <file name="index.html">
        <script>
            var focusOn = angular.module('focusOn', []);

            focusOn.controller('focusCtrl', ['$scope', function($scope) {
            $scope.selectItem = function() {
                $scope.broadcast('itemSelected');
            };
            }]);
        </script>

        <div ng-app="focusOn" ng-controller="focusCtrl">
            <input focus-on event="itemSelected">
            <button ng-click="selectItem()">Focus on itemSelect Event</button>
        </div>
    </file>
    </example>
 */
.directive('focusOn', [function() {
    return {
        restrict: 'A',
        scope: {
            event: '@'
        },
        link: function($scope, elem) {
            $scope.$on($scope.event, function() {
                elem[0].focus();
            });
        }
    }
}]);