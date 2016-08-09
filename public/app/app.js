angular.module('myApp', ['MyCtrls', 'MyFactories', 'MyServices', 'ui.router', 'ui.ace'])
.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  });

  $locationProvider.html5Mode(true);
})
.controller('IndexCtrl', ['$scope', '$http', function($scope, $http){
  $scope.aceLoaded = function(_editor) {
    // Options
    console.log("loaded");
  };

  $scope.aceChanged = function(e) {
    //
    console.log("--");
  };

  $scope.testCode = function(code) {
    var code = code;
    // because angular http wants to send JSON I had to wrap the gathered
    // code from the editor in an object to send it.
    var sendObj = {};
    sendObj.code = code;                   
    $http.post('/api', sendObj).then(function success(res){
      console.log("success:", res);
      $scope.res = res;
    }, function error(res){
      console.log("error:", res);
    });
  }
}]);