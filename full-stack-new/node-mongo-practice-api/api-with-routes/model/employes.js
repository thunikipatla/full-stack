var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmpSchema = new Schema({
    empid: {
        type: Number,
        unique: true
    },
    name: {
        type: String

    },
    role: {
        type: String
    },
    team: {
        type: String
    }
})

module.exports = mongoose.model('employe', EmpSchema);