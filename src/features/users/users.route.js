const { getAllUsersController } = require('./users.controller');

module.exports = function(app) {
  app.get('/api/v1/users/all', getAllUsersController);
};