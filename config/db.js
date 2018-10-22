const mongoose  = require('mongoose')
const logger    = require('../logs/logger')
const config    = require('./config')

// Mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect(config.db.uri, { useNewUrlParser: true })
  .then(() => {
    logger.info('database connected successfully');
  })
  .catch((err) => {
    logger.error(err);
  });
