var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    empid: {
        type: Number,
        unique: true
    },
    empName: {
        type: String
    },

    empDep: {
        type: String
    }
})

module.exports = mongoose.model('employe', employeeSchema);