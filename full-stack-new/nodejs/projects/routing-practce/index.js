var express = require('express');

var app = express();

app.use(express.json());

var userRouter = require('./routes/user.route');

app.use('/user', userRouter);


app.listen(9011, function() {
    console.log('Server Started !!')
})