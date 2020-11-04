var express = require('express');
// const { Router } = require('express');

var router = express.Router();

var users = [];

router.post('/adduser', function(req, res) {
    var user = req.body;
    users.push(user);
    res.send(users);
})

router.get('/getallusers', function(req, res) {
    res.send(users);
})

router.get('/getuserbyid/:id', function(req, res) {
    // console.log("Here you will get the user list based on id");
    idparam = req.params.id;
    // console.log(idparam);
    // res.send(users);
    // console.log(users[1].idparam);
    // res.send(users[1].idparam);
    for (i = 0; i < users.length; i++) {
        if (idparam == users[i].id) {
            res.send(users[i]);
        }
    }

})

module.exports = router;