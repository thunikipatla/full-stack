var express = require('express');

var mongoose = require('mongoose');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected');
    }
})

var productmodel = require('./model/products');

app.get('/getproducts', function(req, res) {

    productmodel.find({}, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })

})

app.post('/addproducts', function(req, res) {

    var product = req.body;

    var productdocument = new productmodel(product)

    productdocument.save(function(err, doc) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })



})

app.get('/getproductsbyid/:id', function(req, res) {

    var id = req.params.id;
    // console.log(id);
    // res.send(id);
    productmodel.findOne({ pid: id }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        } else {
            res.send('ID is invalid')
        }
    })
})


app.listen('9016', function() {
    console.log('Server started!!')
})