var sanitize = require('mongo-sanitize');

module.exports = function(app) {
  var Contact = app.models.contact;
  var controller = {};

  controller.contactList = function(req, res) {
    Contact.find().populate('emergency').exec()
    .then(
      function(contacts) {
        res.json(contacts);
      },
      function(error) {
        console.error(error);
        res.status(500).json(error);
      }
    );
  };

  controller.getContact = function(req, res) {
    var _id = req.params.id;
    Contact.findById(_id).exec()
    .then(
      function(contact) {
        if (!contact) {
          throw new Error('Contato não encontrado');
        }
        res.json(contact);
      },
      function(error) {
        console.error(error);
        res.status(404).json(error);
      }
    );
  };

  controller.removeContact = function(req, res) {
    var _id = sanitize(req.params.id);
    Contact.remove({"_id": _id}).exec()
    .then(
      function() {
        res.end();
      },
      function(error) {
        return console.error(error);
      }
    );
  };

  controller.saveContact = function(req, res) {
    var _id = req.body._id;

    var data = {
      "name" : req.body.name,
      "email" : req.body.email,
      "emergency" : req.body.emergency || null
    };

    if (_id) {
      Contact.findByIdAndUpdate(_id, data).exec()
      .then(
        function(contact) {
          res.json(contact);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      );
    } else {
      Contact.create(data)
      .then(
        function(contact) {
          res.status(201).json(contact);
        },
        function(error) {
          console.error(error);
          res.status(500).json(error);
        }
      )
    }
  };

  return controller;
};
