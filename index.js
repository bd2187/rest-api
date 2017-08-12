const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(err) {
  if (err) return console.log(err);
  console.log(`Now listening to port ${PORT}`);
});
