var ContactPage = new require('./pages/ContactPage');

describe('Contact register', function() {

  var page = new ContactPage();

  beforeEach(function() {
    page.visit();
  });

  it('Should register a contact', function() {
    var random = Math.floor((Math.random() * 10000000) + 1);
    var name = 'test' + random;
    var email = 'test@email' + random;

    page.enterName(name);
    page.enterEmail(email);
    page.selectFirstEmergency();
    page.save();
    expect(page.getMessage()).toContain('sucesso');
  });

});
