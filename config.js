var app= angular.module('myModule');

app.config(function($routeProvider){
  $routeProvider
    .when('/cat',{
      controller: 'myController',
      templateUrl: 'cat.html'
    })
    .when('/dog', {
      controller: 'myController',
      templateUrl: 'dog.html'
    })
    .otherwise({ redirectTo: '/cat'})
});
