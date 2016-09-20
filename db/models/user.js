/**
 * Created by freez on 20.09.2016.
 */

var mongoose = require('libs/mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


//***************************************
var schema = new Schema({
    created: {type: Date, default: Date.now},
    user_id: {type: ObjectId, ref: 'User'},
    email_address: {type: String},
    text: {type: String, default: null},
    token: {type: String, default: null}

});

exports.User = mongoose.model('User', schema);
