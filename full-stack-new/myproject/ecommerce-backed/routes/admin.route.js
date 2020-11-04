var express = require('express');

var router = express.Router();

var AdminController = require('../controllers/admin.cntrl');

router.get('/login', AdminController.login);
router.post('/addprodct', AdminController.addproduct);
router.get('/getallproducts', AdminController.getallproduct);
router.post('/updateproduct', AdminController.updateproduct);
router.get('/productbycatgeory', AdminController.getbycatgeory);

module.exports = router;