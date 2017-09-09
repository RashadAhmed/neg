var goodreadservice = function() {
    var getBookById = function(id, cb) {
        cb(null, {
            description: 'Our Descriptions'
        });
    };
    return {
        getBookById: getBookById
    }

};

module.exports = goodreadservice;