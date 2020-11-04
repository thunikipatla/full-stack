var itemModule = require('../models/item.model');
const itemModel = require('../models/item.model');

exports.AddItem = function(req, res) {
    var item = req.body;
    var itemdoc = new itemModule(item);
    itemdoc.save(function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    });
}

exports.Getitems = function(req, res) {
    itemModule.find({}, function(err, doc) {
        if (err) {
            res.send(err)
        }
        if (doc) {
            res.send(doc);
        }
    });
}

exports.GetById = function(req, res) {
    var id = req.params.id;
    itemModel.findOne({ id: id }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    });
}

exports.UpdateById = function(req, res) {
    var id = req.params.id;
    var updatebody = req.body;
    itemModel.findByIdAndUpdate({ id: id }, { $set: { brand: updatebody } }, function(err, doc) {
        if (err) {
            res.send(err);
        }
        if (doc) {
            res.send(doc);
        }
    });
}