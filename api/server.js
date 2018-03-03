const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb/ustory');

// Constants
const PORT = 6969;
const HOST = '0.0.0.0';
const MONGO_HOST = 'localhost';
const MONGO_PORT = 27017;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connect to mongoDB success');
  app.get('/', (req, res) => res.send('UStory is runningggg......'));
  require('./User/UserController')(app);

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
});
