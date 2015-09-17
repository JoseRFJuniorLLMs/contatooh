angular.module('contatooh').factory('Contact', function($resource) {
  return $resource('/contacts/:id');
});
