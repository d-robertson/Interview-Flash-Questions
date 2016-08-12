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
  var num = 0;
  $scope.aceLoaded = function(_editor) {
    // Options
    console.log("loaded");

    // $scope.code = "// write your code below this line."

    var _renderer = _editor.renderer;
    _renderer.setShowGutter(true);

    $http.get('/api').then(function success(res){
      console.log("http success: ", res);
      console.log(res.data);
      $scope.resData = res.data;
      $scope.prompt = $scope.resData[num];
      $scope.code = $scope.prompt.editorLoadText;

    }, function error(res){
      console.log("http error: ", res);
    })
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
    console.log("prompt: ", $scope.prompt);
    sendObj.code = code;
    sendObj.test = $scope.prompt.test;                   
    $http.post('/api', sendObj).then(function success(res){
      console.log("success:", res);
      $scope.res = res;
    }, function error(res){
      console.log("error:", res);
    });
  }


  $scope.nextPrompt = function(){
    num +=1;
    $scope.prompt = $scope.resData[num];
    $scope.code = $scope.prompt.editorLoadText;
    $scope.res.data.messages = [];
  }
}]);