var express = require('express');
var router = express.Router();
var swimmerData = require('../data/swimmers.json');

router.get('/profile/:userId', function(req, res, next) {
  res.render('profile', { title: 'Profil', swimmerData:getStaticSwimmerData(swimmerData, req.params.userId), events:res.events });
});

function getStaticSwimmerData(data, userId) {
  var results = data.filter(function (entry) { return entry.id == userId; });
  console.log('results', results[0]);

  return results[0];
}

module.exports = router;