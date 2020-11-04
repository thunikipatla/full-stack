var express = require('express');

var mongoose = require('mongoose');
var Authrouter = require('./routes/auth.route');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/project-test-2',{ useNewUrlParser: true, useUnifiedTopology: true},function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('DB connected!!!!')
    }
})

app.use('/v1/users', Authrouter);


app.listen('9012', function(){
    console.log('Server connected !!!!!!')
})