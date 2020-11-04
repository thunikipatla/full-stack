var express = require('express');

var swaggerJsDoc = require('swagger-jsdoc');

var swaggerui = require('swagger-ui-express');

var app = express();
// app.use(express.json());

var port = process.env.PORT || 5000;

var swaggeroptions = {
    swaggerDefination: {
        info:{
            version: "1.0.0",
            title: "Customer API",
            description: "Customer API information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:5000"]
        }
    }, 
    apis: ["index.js"]
};

// var swaggerdocs = swaggerJsDoc(swaggeroptions);
// app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerdocs));

const swaggerDocs = swaggerJsDoc(swaggeroptions);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocs));

users = []

// /**
//  * @swagger
//  * /users:
//  *  get:
//  *    description: Use to get all the users
//  *    responses: 
//  *      '200':
//  *         description: A successfull response
//  */

// Routes
/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.get('/users', function(req, res){
    res.send(users);
});

// app.post('/postuser', function(res, res){
//     var user = req.body; 
//     users.push(user); 
//     res.send(users);
// })

app.listen(port, function(){
    console.log('Server started !!!')
})