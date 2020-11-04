var express = require('express');

var mongoose = require('mongoose');

var app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/empdbnew', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB connected');
    }
})

var EmployeeModel = require('./model/employes');
const { find } = require('./model/employes');

app.post('/AddEmployee', function(req, res) {
    var employee = req.body;

    var EmployeeDoc = new EmployeeModel(employee);

    EmployeeDoc.save(function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc)
        }
    })

})


app.get('/GetAllEmps', function(req, res) {
    EmployeeModel.find({}, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    })
})

app.get('/UpdateEmpDesignation/:id', function(req, res) {
    var id = req.params.id;
    var designation = req.body;
    EmployeeModel.findOneAndUpdate({ empid: id }, { $set: designation }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    });
})


app.listen(9011, function() {
    console.log('server started');
})