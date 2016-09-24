/**
 * Created by freez on 24.09.2016.
 */

var reg_dvizh = require('db/models/registr_dvizheniya').registr_dvizheniya;

exports.get = function(req, res, next){
    console.log('main exports.get');
    reg_dvizh.find().exec(function(err, data){
        if(err) next(err);
        if(data.length > 0){
            res.render('main',{check: true, data: data});
        } else {
            res.render('main',{check: false, data: null});
        }
    });
};


exports.post = function(req, res, next){
    console.log('main exports.post')
};