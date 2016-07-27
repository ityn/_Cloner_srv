/**
 * Created by freez on 26.07.2016.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //require('mpromise'); //
var config = require('config');
// Connection URL
//var url = 'mongodb://UserAdmin:123@localhost:27017/myproject'; //?authMechanism=MONGODB-CR&authSource=myproject'; //&dbName=myproject';

mongoose.connect(config.get('mongoose:uri'));

module.exports = mongoose;