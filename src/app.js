require('dotenv').config();

const db = require('./config/mongo');
const server = require('./config/express');

(async function() {
  await db.connect();
  server.start();
})();