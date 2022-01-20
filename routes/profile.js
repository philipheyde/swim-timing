var express = require('express');
var router = express.Router();
var swimmerData = require('../data/swimmers.json');

router.get('/profile/:userId', function(req, res, next) {
  res.render('profile', { title: 'Profil', swimmerData:swimmerData, events:res.events });
});

module.exports = router;