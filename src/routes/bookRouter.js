var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;
var bookRouter = express.Router();

var router = function(nav) {
    bookRouter.use(function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });
    bookRouter.route('/')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function(err, results) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: nav,
                        books: results

                    });
                });

            });

        });
    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = new objectid(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.findOne({ _id: id }, function(err, results) {
                    res.render('bookView', {
                        title: 'Books',
                        nav: nav,
                        book: results
                    });
                });

            });
        });
    bookRouter.route('/nodejs')
        .get(function(req, res) {
            res.send('NodeJS Course');
        });
    bookRouter.route('/Meanjs')
        .get(function(req, res) {
            res.send('Mean Stack Course');
        });
    return bookRouter;
};

module.exports = router;