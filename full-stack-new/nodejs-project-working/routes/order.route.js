var express = require('express');
var router = express.Router();
var OrderController = require('../controllers/order.cntrl');

router.post('/placeorder', OrderController.insert);
router.get('/allorders', OrderController.GetOrders);

module.exports = router;