var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
    firstname: {
        type: String,
        required: [true, 'first name is required']
    },
    lastname: {
        type: String,
        required: [true, 'last name is required']
    },
    mobile: {
        type: String,
        required: [true, 'mobile number is required']
    },
    email: {
        type: String, 
        required: [true, 'email is required'],
        validate: {
            validator: function(value){
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: function(props){
                return `${props.value} is in invalid format`
            }
        }
    },
    password: {
        type: String, 
        required: [true, 'password is required']
    },
    address: {
        type: String, 
        required: [true, 'address is required']
    }
})