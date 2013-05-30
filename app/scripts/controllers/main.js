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
                $location.path("/projects");
            } else {
                alert("username does not exist")
            }
        }
    })


    .controller('ProjectsListCtrl', function ($scope, Projects) {
        $scope.projects = Projects.query();
    })


    .controller('ProjectDetailsCtrl', function ($scope, $routeParams, Projects) {
        console.log("project id : " + $routeParams.projectId);
        $scope.project = Projects.get({projectId: $routeParams.projectId}, function (phone) {
        })
    });
