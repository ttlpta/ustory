const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('UStory is running'));
require('./User/UserController')(app);

app.listen(3000, () => console.log('UStory is running in port 3000!'))