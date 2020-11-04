var express = require('express');

var router = express.Router();

users = []

router.post('/AddUsers', function(req, res) {
    var user = req.body;
    users.push(user);
    res.send(users);
})

router.get('/GetAllUsers', function(req, res) {
    res.send(users);
})

router.get('/GetuserbyID/:id', function(req, res) {
    var idparam = req.params.id;
    for (i = 0; i < users.length; i++) {
        if (idparam == users[i].id) {
            res.send(users[i]);
        }
    }

})

module.exports = router;