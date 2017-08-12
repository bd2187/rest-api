const express = require('express');
const router = express.Router();
const Dev = require('../models/developer');

router.get('/developers', function(req, res) {
  res.send('Hello dev!');
});

router.post('/developers', function(req, res) {
  const Developer = new Dev(req.body);
  Developer.save()
    .then(developer => res.send(developer))
    .catch(err => res.status(422).send({ error: err.message }));
});

router.put('/developers/:id', function(req, res) {});

router.delete('/developers/:id', function(req, res) {
  Dev.findByIdAndRemove({ _id: req.params.id })
    .then(function(user) {
      res.send({
        message: `${user.name} was successfuly deleted from our database`
      });
    })
    .catch(err => res.send(err));
});

module.exports = router;
