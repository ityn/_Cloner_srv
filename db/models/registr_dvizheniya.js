/**
 * Created by freez on 27.07.2016.
 */
var mongoose = require('libs/mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
//***************************************
var schema = new Schema({
    created: {type: Date, default: Date.now},
        //user_id: {type: ObjectId, ref: 'User'},
        //email_address: {type: String},
        //text: {type: String, default: null},
        //token: {type: String, default: null},
        //***************************************
        //operation: 'add',
        //created_at: '1469594853',
        //clone_id: '118565',
        //clone_name: 'Dknyaz',
        //delta: '0,0567',
        //saldo: '5,7734',
        //action_type: '51',
        //comment1: 'Продажа лота на бирже\n\n\n',
        //comment2: '',
        //comment3: 'Продажа лота на бирже',
        //ref: '9pUR0bcNBPZuAS3m',
        //dt: '<a href="#" onclick="filter_set(\'created_at\',\'1469594853\'); return false;; return false;">27 июля 2016 г. 4:47:33 UTC</a>',
        //name: '<a href="#" onclick="filter_set(\'clone_id\',\'118565\'); return false;; return false;">Dknyaz</a>'
        //******************************
    operation: {type: String, default: null},
    created_at: {type: String, default: null},
    clone_id: {type: String, default: null},
    clone_name: {type: String, default: null},
    delta: {type: String, default: null},
    saldo: {type: String, default: null},
    action_type: {type: String, default: null},
    comment1: {type: String, default: null},
    comment2: {type: String, default: null},
    comment3: {type: String, default: null},
    comment4: {type: String, default: null},
    comment5: {type: String, default: null},
    ref: {type: String, default: null},
    dt: {type: String, default: null},
    name: {type: String, default: null}
});

exports.registr_dvizheniya = mongoose.model('registr_dvizheniya', schema);