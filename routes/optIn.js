//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.post('/', function(req, res, next) {
//    res.status(200).json({ success: 'message' });
//	console.log('_____ jr'); //(req.body);
//});
//
//module.exports = router;

exports.post = function(req, res, next) {
    res.status(200).json({ success: 'message' });
	console.log('_____ jr'); //(req.body);
};
