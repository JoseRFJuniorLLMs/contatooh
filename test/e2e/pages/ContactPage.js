var ContactPage = function() {

  this.visit = function() {
    browser.get('http://localhost:3000/#/contact');
  };

  this.enterName = function(name) {
    element(by.model('contact.name')).sendKeys(name);
  };

  this.enterEmail = function(email) {
    element(by.model('contact.email')).sendKeys(email);
  };

  this.save = function() {
    element(by.css('.btn-primary')).click();
  };

  this.getMessage = function() {
    return element(by.binding('message.text')).getText();
  }

  this.selectFirstEmergency = function() {
    element(by.css('option[value="0"]')).click();
  };

};

module.exports = ContactPage;
