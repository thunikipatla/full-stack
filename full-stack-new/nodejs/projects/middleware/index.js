var express = require('express');

var app = express();

app.use(express.json());

users = []

var AuthMiddleware = function(req, res, next) {
    var token = req.headers.token;
    if (token == 12345) {
        next();
    } else {
        res.send('Invalid Token')
    }
}

app.use(AuthMiddleware);


app.get('/GetallUsers', function(req, res) {
    res.send(users)
})

app.post('/adduser', function(req, res) {
    user = req.body;

    users.push(user);
    res.send(users);
})



app.listen(9011, function() {
    console.log("Server Started !!!")
})