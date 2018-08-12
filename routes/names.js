var express = require('express');
var router = express.Router();
var names = require('./../names.json')

router.get('/', function (req, res) {
    res.send(names);
});

router.post('/', function (req, res) {
    res.send(names);
});

module.exports = router;