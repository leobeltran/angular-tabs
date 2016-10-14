;(function(window){
  angular.module('app',[])
  .directive('tab', function(){
    return {
      restrict: 'E',
      transclude: true,
      template: '<h2>Hello, World!</h2> <div role="tabpanel" ng-transclude></div>',
      require: '^tabset',
      scope: { },
      link: function(scope, elem, attr, tabsetCtrl){}
    }
  })
  .directive('tabset', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: { },
      templateUrl: 'tabset.html',
      bindToControllers: true,
      controllerAs: 'tabset',
      controller: function(){
        var self = this;
        self.tabs = [];
      },
    }
  })
})(window);
