var express = require('express');

var router = express.Router();

var UserController = require('../controllers/user.cntrl');

router.post('/adduser', UserController.createuser);
router.get('/login',UserController.Login);
router.post('/forgotpassword', UserController.sendemail);
router.post('/updatepassword', UserController.updatepassword);

module.exports = router;