/**
 * Created by freez on 24.09.2016.
 */

var reg_dvizh = require('db/models/registr_dvizheniya').registr_dvizheniya;

exports.get = function(req, res, next){
    console.log('main exports.get');
    reg_dvizh.find().exec(function(err, data){
        if(err) next(err);
        if(data.length > 0){
            console.log('data.length: ' + data.length);
            res.render('main',{title: 'Main true', chck: true, data: data});
        } else {
            console.log('data null');
            res.render('main',{title: 'Main null', chck: false, data: null});
        }
    });
};


exports.post = function(req, res, next){
    console.log('main exports.post')
};