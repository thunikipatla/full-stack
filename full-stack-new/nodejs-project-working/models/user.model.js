var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
    firstname: {
        type: String,
        require: [true, 'firstname is required']
    },
    lastname: {
        type: String,
        require: [true, 'last name is required']
    },
    mobile: {
        type: String,
        require: [true, 'mobile is required']
    },
    email: {
        type: String,
        require: [true, 'Email ID is required'],
        validate: {
            validator: function(value){
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: function(props){
                return '{props.value} is in invalid format'
            }

        }
    },
    password: {
        type: String,
        require: [true, 'password is required']
    },
    createdAT: {
        type: Date,
        default: new Date()
    }
})