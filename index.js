const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

// Connect to mongodb and overwrite mongoose's promise api
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/developers', { useMongoClient: true });

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
