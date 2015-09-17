angular.module('contatooh').controller('ContactController',
  function($scope, $routeParams, Contact) {

    if ($routeParams.contactId) {
      Contact.get({id: $routeParams.contactId},
        function(contact) {
          $scope.contact = contact;
        },
        function(error) {
          $scope.message = {
            text: 'Não foi possível obter o contato'
          };
          console.log(error);
        });
    } else {
      $scope.contact = new Contact();
    }

    $scope.save = function() {
      $scope.contact.$save()
        .then(function() {
          $scope.message = {text: 'Salvo com sucesso'};
          $scope.contact = new Contact();
        })
        .catch(function(error) {
          $scope.message = {text: 'Não foi possível salvar'};
          console.log(error);
        });
    };

    Contact.query(function(contacts) {
      $scope.contacts = contacts;
    });

});
