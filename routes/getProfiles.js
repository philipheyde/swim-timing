var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    {
      "id": 123,
      "name": "Svømmer A",
      "profileImage": ""
    }
  );
});

module.exports = router;
