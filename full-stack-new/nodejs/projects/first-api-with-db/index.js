var express = require('express');

var app = express();

var mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb://localhost/flipkartdb", { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);

        // res.send("err": err.message);

    } else {
        console.log('database connected');
    }
})

var ProductModel = require('./model/products');



// console.log(ProductModel);

app.get('/getproducts', function(req, res) {
    res.send(products);
});

app.post('/addproducts', function(req, res) {
    var product = req.body;

    var ProductDocument = new ProductModel(product);



    ProductDocument.save(function(err, doc) {
            if (err) {
                console.log('err', err);
                res.send({ 'error': err.message })
            }
            if (doc) {
                res.send(doc);
            }
        })
        // db logic 
});


app.listen('9013', function() {
    console.log('Server started')
})