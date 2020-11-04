var express = require('express'); 

var app = express(); 

var swaggerJsDoc = require('swagger-jsdoc');

var swaggerui = require('swagger-ui-express');

var port = process.env.PORT || 5000;

var swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'Customer API', 
            description: 'Customer API information',
            contact:{
                name: "amazing developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ['index.js']
};

var swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "user API",
        description: "users API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:5000"]
      }
    },
    // ['.routes/*.js']
    apis: ["index.js"]
  };

  var users =[];


var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocs));

/**
 * @swagger
 * /users:
 *   get:
 *     description: use to request all users
 *     responses: 
 *       '200':
 *          description: A successfull response 
 */

app.get('/users', function(req,res){
    res.send('Users list')
});

/**
 * @swagger
 * /Adduser:
 *   post:
 *     description: To add the users to users list 
 *     requestBody:
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name: 
 *                 type: string
 *     responses:
 *       '200':
 *          description: OK
 */

app.post('/Adduser', function(req,res){
    var user = req.body;
    users.push(user);
    res.send(users);
})

app.listen(port, function(){
    console.log('Server started !!!')
})

