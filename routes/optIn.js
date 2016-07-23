var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.status(200).send('Acceptable');
	console.log(req.body);
});

module.exports = router;
