var config = require('./config')();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

	var User = mongoose.model('User');

	passport.use(new GitHubStrategy(
    {
      clientID: config.clientID,
  		clientSecret: config.clientSecret,
  		callbackURL: "http://localhost:3000/auth/github/callback"
    }, function(accessToken, refreshToken, profile, done) {

		User.findOrCreate(
			{ "login" : profile.username },
			{ "name" : profile.username },
			function(error, user) {
				if (error) {
					return done(error);
				}
				return done(null, user);
			}
		);
	}));

	passport.serializeUser(function(user, done) {
	  done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id).exec()
	  .then(function(user) {
	  	done(null, user);
	  });
	});

};
