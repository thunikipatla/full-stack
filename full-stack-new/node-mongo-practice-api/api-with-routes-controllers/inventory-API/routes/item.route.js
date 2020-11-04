var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("DB Connected !!")
    }
})

var router = express.Router();

var invController = require('../controlers/item.controller');




router.post('/AddItem', invController.AddItem);

router.get('/GetAllItems', invController.Getitems);

router.get('/GetById/:id', invController.GetById);
router.get('/UpdateById/:id', invController.UpdateById);


module.exports = router;