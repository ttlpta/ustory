const express = require('express');
const app = express();
// Constants
const PORT = 6969;
const HOST = '0.0.0.0';

app.get('/', (req, res) => res.send('UStory is running......'));
require('./User/UserController')(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);