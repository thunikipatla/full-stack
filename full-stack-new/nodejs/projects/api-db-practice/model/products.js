var mongoose = require('mongoose');
const { strict } = require('assert');
const { stringify } = require('querystring');

var Schema = mongoose.Schema;

var productschema = new Schema({
    pid: {
        type: Number
    },
    name: {
        type: String
    },

    brand: {
        type: String
    }

})

module.exports = mongoose.model('product', productschema);