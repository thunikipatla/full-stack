var express = require('express');

var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost/empdbroute', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB connected');
    }
})

var employeeModel = require('../model/employes');
const e = require('express');

router.post('/Adduser', function(req, res) {
    emp = req.body;
    var empDocument = new employeeModel(emp);

    empDocument.save(function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })

})
router.get('/GetAllEmps', function(req, res) {
    employeeModel.find({}, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})

router.get('/GetEmpbyId/:id', function(req, res) {
    var id = req.params.id;
    employeeModel.findOne({ empid: id }, function(err, doc) {
        if (err) {
            res.send(err)
        }
        if (doc) {
            res.send(doc);
        }
    })
})


module.exports = router;