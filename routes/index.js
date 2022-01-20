var express = require('express');
var router = express.Router();
var swimmerData = require('../data/swimmers.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oversigt over svømmere', swimmerData:swimmerData });
});

module.exports = router;