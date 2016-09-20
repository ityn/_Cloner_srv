/**
 * Created by freez on 20.09.2016.
 */

var mongoose = require('libs/mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


//***************************************
var schema = new Schema({
    created: {type: Date, default: Date.now},
    email_address: {type: ObjectId, ref: 'Email'},
    password_hash: {type: String, default: null},
    salt: {type: String, default: null},
    secret: {type: String, default: null}

});

exports.User = mongoose.model('User', schema);
