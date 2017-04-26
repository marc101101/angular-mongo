const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


// Connection URL
var url = 'mongodb://*******@ds013290.mlab.com:13290/heroku_lzs554jn';

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('debate_10');
  // Find some documents
  collection.find().toArray(function (err, docs) {
    assert.equal(err, null);
    console.log(docs);
    callback(docs);
  });
}

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  var data = MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    findDocuments(db, function () {
      db.close();
    });
  });
  // This should ideally be replaced with a service that connects to MongoDB
  try {
    res.status(200).json("" + data);
  } catch (error) {
    res.status(500).send(error)
  }
});

module.exports = router;
