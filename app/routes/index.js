module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', { "loggedUser" : req.user.login });
  });

};
