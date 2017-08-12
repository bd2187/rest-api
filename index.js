const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();

// Middleware Setup
app.use(bodyParser.json());

// Routes Setup
app.use('/api', routes);

// Application Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(err) {
  if (err) return console.log(err);
  console.log(`Now listening to port ${PORT}`);
});
