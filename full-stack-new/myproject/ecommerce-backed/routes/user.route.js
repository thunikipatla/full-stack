var express = require('express');

var Router = express.Router();

var UserController = require('../controllers/user.cntrl');

Router.post('/register', UserController.register);
Router.get('/login', UserController.login);

module.exports = Router;