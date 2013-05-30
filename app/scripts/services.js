angular.module('jenkinsConfiguratorServices', ['ngResource'])

    .factory('Projects', function ($resource) {
        return $resource('data/project:projectId.json', {}, {
            query: {method: 'GET', params: {projectId: 's'}, isArray: true}
        })
    });

