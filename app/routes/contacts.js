var verifyAthentication = require('../../config/auth');

module.exports = function(app) {
  var controller = app.controllers.contacts;

  app.route('/contacts')
    .get(verifyAthentication, controller.contactList)
    .post(verifyAthentication, controller.saveContact);

  app.route('/contacts/:id')
    .get(verifyAthentication, controller.getContact)
    .delete(verifyAthentication, controller.removeContact);
};
