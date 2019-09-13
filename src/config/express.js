const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
require('../features/signup/signup.route')(app);
require('../features/users/users.route')(app);


module.exports = {
  start: () => app.listen(port, () => console.log(`Server is listening on port: ${port}`))
};