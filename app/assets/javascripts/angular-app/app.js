'use strict';

angular
  .module('app', ['ngRoute', 'ngResource', 'Devise'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }]);
