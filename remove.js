var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection(process.argv[3])
  collection.remove({
    _id: process.argv[4]
  }, function (err, data) {
    // body...
    if (err) throw err;
    consolel.log(JSON.stringify(data));
    db.close;
  });
})