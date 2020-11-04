var express = require('express');

var mongoose = require('mongoose');

var AuthRouter = require('./routes/auth.route');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/project-test', {useNewUrlParser: true, useUnifiedTopology: true},function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log('DB connected!!!')
    }
})

app.use('/v1/users', AuthRouter)



app.listen('9011', function(){
    console.log('server started!!!!!')
})