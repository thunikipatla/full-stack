var express = require('express');

var mongoose = require('mongoose');

var app = express();

app.use(express.json());

var userRoute = require('./routes/user.route')

app.use('/user', userRoute);

app.listen('9012', function() {
    console.log('Server started')
})