var express = require('express');
var PromptModel = require('../models/prompt');
var router = express.Router();

// require tests
var myTests = require('../tests');

// Base line url pattern = /api

router.route('/')
.get(function(req, res) {
  res.send('Hit base API route');
})
.post(function(req, res) {
  console.log('Hit post route', req.body);
  myTests.addFunction(req.body);
  res.send(myTests.addFunction(req.body));

});

module.exports = router;