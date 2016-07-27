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

var registr_dvizheniya = require('db/models/registr_dvizheniya').registr_dvizheniya;

exports.post = function(req, res, next) {
    var req_body = req.body;
    var arr = req_body.res_json;
    arr.forEach(function(item, i, arr) {
        //alert( i + ": " + item + " (массив:" + arr + ")" );
        //var data = JSON.stringify(item);
        var timestamp = item.created_at*1000;
        var date = new Date();
        date.setTime(timestamp);
        //alert( date.getHours() );
        console.log(i + ": " + item.created_at +": " + date.toUTCString());
        var reg_dvizh = new registr_dvizheniya({
            operation:item.operation,
            created_at:item.created_at,
            clone_id:item.clone_id,
            clone_name:item.clone_name,
            delta:item.delta,
            saldo:item.saldo,
            action_type:item.action_type,
            comment1:item.comment1,
            comment2:item.comment2,
            comment3:item.comment3,
            ref:item.ref,
            dt:item.dt,
            name:item.name
        });

        reg_dvizh.save(function(err, reg_dvizh, affected){
            if(err) console.log(err);
            //sndSms(reg_dvizh._id, 'Code: '+ token, false);
            //res.status(200).json({ success: reg_dvizh });
            console.log(i + ": " + reg_dvizh );
        });
        //console.log(i + ": " + data );
    });

    res.status(200).json({ success: 'message' });
	console.log('_____ jr'); //(req.body);
};
