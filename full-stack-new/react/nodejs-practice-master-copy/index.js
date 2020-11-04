var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var User = require("./server/route/users");
mongoose.connect("mongodb://localhost/ecommapp");
var Product= require('./server/route/products');

var app = express();

app.use(cors()); 

app.use(bodyParser.json());

// http://localhost:3019/api/register

/*

API URL:  http://localhost:3019/api/register


request format: 

{
    firstName:,
    lastName:,
    emailId:,
    password:,
    mobileNumber:
}

*/

app.post('/api/register', User.registerUser);

app.post('/api/login', User.loginUser);

app.post('/api/addProduct',Product.addProduct);

app.get('/api/getAllProducts',Product.getAllProducts);

app.get('/api/getProductById/:productId',Product.getProductById);

app.put('/api/editProductById/:productId', Product.editProduct);

app.delete('/api/deleteProductById/:productId',Product.deleteProduct);

app.get('/api/getAllUsernames/',User.getAllUsernames);

app.listen(3019, function(){
    console.log("Server started on 3019");
});


//http://www.omdbapi.com/?t=arjun%20reddy&apikey=1afef20d