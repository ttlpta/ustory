const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());   
app.use(bodyParser.json());   
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb/ustory');

// Constants
const PORT = 6969;
const HOST = '0.0.0.0';

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.get('/', (req, res) => res.send('UStory is runningggg......'));
  require('./Controller/UserController')(app, mongoose);
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
});
