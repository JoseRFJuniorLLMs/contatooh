var config = require('./config/config')();
var http = require('http');
var app  = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express Server escutando na porta ' + app.get('port'));
});
