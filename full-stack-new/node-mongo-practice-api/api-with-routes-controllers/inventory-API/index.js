var express = require('express');

var app = express();

app.use(express.json());

var InvRouter = require('./routes/item.route');


app.use('/inv', InvRouter);



app.listen('9011', function() {
    console.log('Server started !!')
})