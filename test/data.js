var MongoClient = require('mongodb').MongoClient;

var contacts = [
  {name: "xyz1", email: "xyz1@email.com"},
  {name: "xyz2", email: "xyz2@email.com"},
  {name: "xyz3", email: "xyz3@email.com"}
];

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh_test',
  function(error, db) {
    if (error) {
      throw err;
    }

    db.dropDatabase(function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('Test database has been dropped');

      db.collection('contacts').insert(contacts,
      function(err, inserted) {
        if (err) {
          return console.log(err);
        }
        console.log('Test database has been populated');

        process.exit(0);
      });
    });
  }
);
