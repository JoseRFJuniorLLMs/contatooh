var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idToFind = ObjectID('55b9653a30dd26df5cbca2c3');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
  function(error, db) {
    if (error) {
      throw err;
    }

    db.collection('contacts').findOne({_id: _idToFind},
      function(error, contact) {
        if (error) {
          throw err;
        }
        console.log(contact);
      }
    );
  }
);
