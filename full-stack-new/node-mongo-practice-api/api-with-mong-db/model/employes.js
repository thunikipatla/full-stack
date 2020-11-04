var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var empschema = new Schema({
    empid: {
        type: Number,
        unique: true
    },

    name: {
        type: String
    },
    designation: {
        type: String
    },

    team: {
        type: String
    }

})

module.exports = mongoose.model('employe', empschema);