var express = require('express');

var router = express.Router();

var AuthController = require('../controllers/auth.cntrl');

router.post('/register', AuthController.register);
router.get('/login',AuthController.login);

module.exports = router;
