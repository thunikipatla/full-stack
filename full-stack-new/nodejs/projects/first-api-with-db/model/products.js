var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
    pid: {
        type: Number,
        unique: true
    },
    name: {
        type: String

    },
    brand: {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema);