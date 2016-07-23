var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('optIn', { title: 'OptIn' });
	console.log(req.body);
});

module.exports = router;
