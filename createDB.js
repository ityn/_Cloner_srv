/*
var MongoClient = require('mongodb').MongoClient,
    f = require('util').format,
    assert = require('assert');

// Connection URL
var url = 'mongodb://UserAdmin:123@localhost:27017/myproject?authMechanism=MONGODB-CR&authSource=myproject'; //&dbName=myproject';
// Use connect method to connect to the Server

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    insertDocuments(db, function() {
        db.close();
    });
});

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
}*/

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //require('mpromise'); //
// Connection URL
var url = 'mongodb://UserAdmin:123@localhost:27017/myproject'; //?authMechanism=MONGODB-CR&authSource=myproject'; //&dbName=myproject';

mongoose.connect(url);

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});
