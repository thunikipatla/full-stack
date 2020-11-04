var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var invSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },

    name: {
        type: String
    },

    brand: {
        type: String
    }
})

module.exports = mongoose.model('item', invSchema);