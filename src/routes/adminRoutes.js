var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
        title: 'Karamzov Brother',
        authot: 'Destoveski'
    },
    {
        title: 'Brother',
        authot: 'Hamidovich'
    },
    {
        title: 'a7a',
        authot: 'Hamidovich'
    }, {
        title: 'a7oooo',
        authot: 'Hamidovich'
    }, {
        title: 'a7eeeh',
        authot: 'Hamidovich'
    }
];
var route = function(nav) {

    adminRouter.route('/addbooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //   res.send('Inserting Books....');
        });
    return adminRouter;
};
module.exports = route;