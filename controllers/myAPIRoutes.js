var express = require('express');
var prompts = require('../models/prompt');
var router = express.Router();

// require tests
var myTests = require('../tests');

// Base line url pattern = /api

router.route('/')
.get(function(req, res) {
  prompts.find(function(err, prompts){
    console.log("searching");
    console.log(prompts);
    if(err) return res.status(500).send(err);
    return res.send(prompts);
  });
})
.post(function(req, res) {
  console.log('Hit post route', req.body);
  myTests[req.body.test](req.body);
  res.send(myTests.addFunction(req.body));

});

module.exports = router;