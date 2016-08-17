var app = angular.module('mean-tea', ['ngRoute', 'ngSanitize'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/teas/index.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
