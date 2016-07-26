/**
 * Created by freez on 26.07.2016.
 */
/**
 * E-mail schema
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

exports.Email = mongoose.model('Email', schema);