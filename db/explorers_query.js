var MongoClient = require('mongodb').MongoClient

var ExplorersQuery = function(){
  this.url = "mongodb://localhost:27017/explorers"
}

ExplorersQuery.prototype = {

  allExplorers: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('discoveries')
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  },

  allQuestions: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('questions')
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs)
        })
      }
    })
  }

}

module.exports = ExplorersQuery