const signupController = require('./signup.controller');

module.exports = function(app) {
  app.post('/signup', signupController);
};