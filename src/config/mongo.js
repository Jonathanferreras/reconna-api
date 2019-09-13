const mongoose = require('mongoose');
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(url, options);
      console.log(`MongoDB is connected on port: ${MONGO_PORT}`);
    }
    catch (error) {
      console.log(`An error occurred while connecting to db, Error: ${error.message}`);
      process.exit();
    }
  }
};
