var express = require('express');

var app = express();

app.use(express.json());

var UserRoute = require('./routes/user.route');

app.use('/user', UserRoute);



app.listen(9011, function() {
    console.log('Server Started!!')
})