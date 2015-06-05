angular
  .module('app')
  .factory('Conference', function($resource) {

    var Conference = $resource('http://localhost:3000/api/v1/conferences/:id.json', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });

    return Conference;
  });
