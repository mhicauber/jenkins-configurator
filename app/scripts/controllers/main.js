'use strict';

angular.module('jenkinsConfiguratorApp')
    .controller('LoginCtrl', function ($scope, $http, $route, $routeParams, $location) {

        $http.get('data/users.json').success(function (data) {
            $scope.users = data;
        });


        $scope.loginUser = function () {
            var loggedin = false;
            var totalUsers = $scope.users.length;
            var usernameTyped = $scope.userUsername;

            for (var i = 0; i < totalUsers; i++) {
                if ($scope.users[i].name === usernameTyped) {
                    loggedin = true;
                    break;
                }
            }

            if (loggedin === true) {
                alert("login successful");
                $location.path("/projects");
            } else {
                alert("username does not exist")
            }
        }
    })
    /*
     .factory("User", function ($resource) {
     return $resource("data/users/:userId.json", {}, {
     query: {
     method: "GET",
     params: {
     userId: "users"},
     isArray: true
     }
     });

     })
     */
    .controller('UserCtrl', function ($scope, $route, $routeParams, $location) {
        $scope.logoutUser = function () {
            $location.path("/login");
        }
    });
