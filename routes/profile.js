var express = require('express');
var router = express.Router();
var swimmerData = require('../data/swimmers.json');

router.get('/profile/:teamId/:userId', function(req, res, next) {
  var memberData = getMemberData(req.params.teamId, req.params.userId);
  console.log('res.events', res.events);
  res.render('profile', { title: memberData.name, swimmerData:memberData, events:res.events });
});

function getMemberData(teamId, userId) {
  var team = swimmerData.teams.filter(function (entry) { return entry.id == teamId; })[0];
  var results = team.members.filter(function (entry) { return entry.id == userId; });

  return results[0];
}

module.exports = router;