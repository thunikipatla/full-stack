var express = require('express');

var Userroute = require('./routes/user.route');
var Adminroute = require('./routes/admin.route');
var Orderroute = require('./routes/order.route');

var app = express();

app.use(express.json());

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecom',{ useNewUrlParser: true, useUnifiedTopology: true} ,function(err,data){
    if(err){
        console.log('mongoose error', err)
    }
    else{
        console.log('DB connected...!')
    }
})

app.use('/v1/users', Userroute);
app.use('/v1/admin',Adminroute);
app.use('/v1/order', Orderroute);


app.listen('9011', function(){
    console.log('Server started on port 9011');
})