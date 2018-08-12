var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([{
    name: "Таня",
    age: 23,
    color: "красный"
  },
  {
    name: "Паша",
    age: 29,
    color: "синий"
  },
  {
    name: "Ваня",
    age: 24,
    color: "желтый"
  }]);
});

module.exports = router;
