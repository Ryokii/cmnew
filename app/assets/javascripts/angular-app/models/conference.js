angular
  .module('app')
  .factory('Conference', function($resource) {

    var Conference = $resource('https://cmnew.herokuapp.com/api/v1/conferences/:id.json', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });

    return Conference;
  });
