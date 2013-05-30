'use strict';

angular.module('jenkinsConfiguratorApp', ['jenkinsConfiguratorServices'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'UserCtrl'})
            .otherwise({
                redirectTo: '/login'
            });
    })

   ;