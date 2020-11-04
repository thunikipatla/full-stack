var express = require('express');

var mongoose = require('mongoose');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/dbroute', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('DB connnected')
    }
})

var employeeModel = require('./model/employes');

app.post('/addEmp', function(req, res) {
    emp = req.body;

    var EmpDocument = new employeeModel(emp);

    EmpDocument.save(function(err, doc) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })

})

app.get('/GetAllEmp', function(req, res) {
    employeeModel.find({}, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})

app.get('/Getempbyid/:id', function(req, res) {

    id = req.params.id;

    employeeModel.findOne({ empid: id }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})

app.post('/remove/:id', function(req, res) {
    id = req.params.id;
    employeeModel.findOneAndDelete({ empid: id }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})

app.get('/GetAllEmps', function(req, res) {
    employeeModel.find({}, { 'empName': 1, "_id": 0 }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})



app.listen('9011', function() {
    console.log('Server started..!');
})