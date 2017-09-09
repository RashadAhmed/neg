var express = require('express');
var mongodb = require('mongodb').MongoClient;
var objectid = require('mongodb').ObjectID;
var bookRouter = express.Router();

var router = function(nav) {
    var bookService =
        require('../services/goodreadservice')();
    var bookController = require('../controllers/bookcontroller')(bookService, nav);
    bookRouter.use(bookController.middleware);
    bookRouter.route('/')
        .get(bookController.getIndex);
    bookRouter.route('/:id')
        .get(bookController.getByID);
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