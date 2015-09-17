angular.module('contatooh').controller('ContactsController',
  function($scope, Contact) {

    $scope.contacts = [];
    $scope.filter = '';
    $scope.message = {text: ''};

    function getContacts() {
      Contact.query(
        function(contacts) {
          $scope.contacts = contacts;
        },
        function(error) {
          console.log('Não foi possível obter a lista de contatos');
          $scope.message = {
            text: 'Não foi possível obter a lista de contatos'
          };
        }
      );
    };
    getContacts();

    $scope.remove = function(contact) {
      Contact.delete({id: contact._id},
        getContacts,
        function(error) {
          console.log('Não foi possível remover o contato');
          $scope.message = {
            text: 'Não foi possível remover o contato'
          };
        });
    };

});
