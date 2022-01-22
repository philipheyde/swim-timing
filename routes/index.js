var express = require('express');
var router = express.Router();
var swimmerData = require('../data/swimmers.json');

router.get('/:teamId', function(req, res, next) {
  var teamData = getTeamData(req.params.teamId);
  res.render('index', { title: teamData.name, teamData:teamData });
});

function getTeamData(teamId) {
  var teamId = teamId ? teamId : 1;
  var results = swimmerData.teams.filter(function (entry) { return entry.id == teamId; });

  return results[0];
}

module.exports = router;