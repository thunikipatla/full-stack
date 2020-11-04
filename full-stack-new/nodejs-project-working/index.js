var express = require('express');

var mongoose = require('mongoose');

var UserRoute = require('./routes/user.route');
var ProductRouter = require('./routes/product.route');

var OrderRouter = require('./routes/order.route');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/ProTest2',{ useNewUrlParser: true, useUnifiedTopology: true},function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log('DB connected....!!')
    }
});

app.use('/v1/users', UserRoute)

app.use('/v1/products', ProductRouter);

app.use('/v1/orders', OrderRouter);


app.listen('9011', function(){
    console.log('Server started on port number 9011');
})