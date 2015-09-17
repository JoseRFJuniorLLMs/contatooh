var ContactsPage = new require('./pages/ContactsPage');

describe('Main page', function() {

  var page = new ContactsPage();

  beforeEach(function() {
    page.visit();
  });

  it('Should be logged in', function() {
    page.getLoggedUser().then(function(text) {
      expect(text.trim().length).toBeGreaterThan(0);
    });
  });

  it('Should remove a contact from the list', function() {
    var totalBeforeRemoving = page.getListCount();
    page.removeFirstListItem();
    var totalAfterRemoving = page.getListCount();
    expect(totalAfterRemoving).toBeLessThan(totalBeforeRemoving);
  });

});
