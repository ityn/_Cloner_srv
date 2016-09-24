var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require('./main').get);

router.post('/opt', require('./optIn').post);

module.exports = router;
