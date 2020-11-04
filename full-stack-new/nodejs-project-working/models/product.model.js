var mongoose = require('mongoose');

module.exports = mongoose.model('product',{
    productname: {
        type: String,
        require: [true, 'product name is required']
    },
    productmodel: {
        type: String,
        require: [true, 'product model is required']
    },
    price: {
        type: String,
        require: [true, 'price is required']
    },
    instock: {
        type: String,
        require: [true, 'instock is required']
    },
    imgsrc: {
        type: String,
        require: [true, 'image is required']
    }
})