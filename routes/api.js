const express = require('express');
const router = express.Router();
const Dev = require('../models/developer');

router.get('/developers', function(req, res) {
  res.send('Hello dev!');
});

router.post('/developers', function(req, res, next) {
  const Developer = new Dev(req.body);
  Developer.save()
    .then(developer => res.send(developer))
    .catch(err => res.status(422).send({ error: err.message }));
});

router.put('/developers/:id', function(req, res) {});

router.delete('/developers/:id', function(req, res) {});

module.exports = router;
