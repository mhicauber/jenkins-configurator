angular.module('jenkinsConfiguratorServices', [])

    .factory('Project', function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        })
    });
