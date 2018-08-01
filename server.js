const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/parks/:parkCode', (req, res) => {
  res.send(req.params.parkCode);
});

app.listen(process.env.PORT || 5000);
