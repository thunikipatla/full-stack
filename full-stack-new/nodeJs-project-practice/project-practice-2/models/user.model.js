var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname: {
        type: String,
        required: [true, 'lastname is required']
    },
    email: {
        type: String,
        required: [true, 'email id required'],
        validate: {
            validator: function(value){
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: function(props){
                return '${props.value} is invalid format'
            }
        }
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    mobile:{
        type: String,
        required:[true,'mobile number is required']
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})