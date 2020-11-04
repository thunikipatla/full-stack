var mongoose = require('mongoose');

module.exports = mongoose.model('admin',{
    productid: {
        type: String,
        
    },
    productcatgeory: {
        type: String,
        required: [true, 'product catageory is required']
    },
    productname: {
        type: String,
        required: [true, 'product name is required']
    },
    price: {
        type: String,
        required: [true, 'price is mandatory']
    },
    instock: {
        type: String, 
        required: [true, 'instock is required']
    }

})