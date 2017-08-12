const express = require('express');
const router = express.Router();

router.get('/developers', function(req, res) {
  res.send('Hello dev!');
});

router.post('/developers', function(req, res) {
  res.send(req.body);
});

router.put('/developers/:id', function(req, res) {});

router.delete('/developers/:id', function(req, res) {});

module.exports = router;
