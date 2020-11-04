var express = require('express');

var app = express();

app.use(express.json());

app.set('view engine', 'pug')

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/SignUp', function(req, res) {
    res.render('signup')
})

app.listen(9011, function() {
    console.log('Server Started!!!')
})