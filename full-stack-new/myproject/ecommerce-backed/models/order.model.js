var mongoose = require('mongoose');

var products= new mongoose.Schema({
    productid: {
        type: String
    },
    productcatgeory: {
        type: String
    },
    productname: {
        type: String
    },
    price: {
        type: String
    }

});

module.exports = mongoose.model('order',{
    userid: {
        type: String
    },
    totalprice: {
        type: String
    },
    products: [products],
    createdAT: {
        type: Date,
        default: new Date()

    }
})