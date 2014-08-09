# angular-focus-on

A simple [angularjs](http://angularjs.org/) directive to set focus on an element through the use of events.

## Getting Started

You can choose one of:

- via **[Bower](http://bower.io/)**: by running `$ bower install angular-focus-on` from your console
- [download](dist/focus-on.js) the minified file.


## Simple Example

Below is a quick example showing the usage, you can also see an examples in the [demo](demo) directory.

[simple demo](https://rawgit.com/kfuchs/angular-focus-on/master/demo/simple/index.html)

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