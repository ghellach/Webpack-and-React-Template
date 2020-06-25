const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.PROD_SERVER_PORT || 8080);