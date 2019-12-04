const express = require('express');
const path = require('path');
const app = express();

console.log('Server started on localhost:8080');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
