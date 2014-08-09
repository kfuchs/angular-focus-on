# angular-focus-on

A simple [angularjs](http://angularjs.org/) directive to set focus on an element through the use of events.

## Getting Started

You can choose one of:

- via **[Bower](http://bower.io/)**: by running `$ bower install angular-focus-on` from your console
- [download](dist/focus-on.js) the minified file.


## Simple Example


```html
<div ng-controller="focusCtrl">
  <input focus-on event="itemSelected">
  <button ng-click="selectItem()">You should select this item</button>
</div>
```

```javascript
angular.module('yourApp', ['kf.focusOn])

    .controller('focusCtrl', ['$scope', function($scope) {
        $scope.selectItem() = function() {
            $scope.$broadcast('itemSelected');
        };
    }]);
```

## TODO's

- Write tests.
- More documentation!
- Finish the [tags-like-stackoverflow](demo/tags-like-stack-overflow) example.

*License === MIT*