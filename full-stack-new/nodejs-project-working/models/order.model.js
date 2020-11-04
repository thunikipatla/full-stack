var mongoose = require('mongoose');

var products = new mongoose.Schema({
    id: {
        type: String 
    },
    name: {
        type: String
    },
    imgsrc: {
        type: String
    },
    price: {
        type: String
    }

})

module.exports = mongoose.model('order',{
    userId: {
        type: String
    },
    totalprice: {
        type: String,
        required: [true, 'total price is required']
    },
    products: [products],
    createdAT: {
        type: Date,
        default: new Date()
    }
});