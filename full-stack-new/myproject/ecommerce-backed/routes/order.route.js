var express = require('express');
var router = express.Router();
var OrderController = require('../controllers/order.cntrl');

router.post('/placeanorder', OrderController.insert);

router.get('/myorders', OrderController.getalluserorders);

module.exports = router;