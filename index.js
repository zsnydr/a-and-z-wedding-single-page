const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

// wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});

module.exports = app;
