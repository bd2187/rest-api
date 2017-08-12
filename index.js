const express = require('express');
const routes = require('./routes/api');

const app = express();

// Routes Setup
app.use('/api', routes);

// Application Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, function(err) {
  if (err) return console.log(err);
  console.log(`Now listening to port ${PORT}`);
});
