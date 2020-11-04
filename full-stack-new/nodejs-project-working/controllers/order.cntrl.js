var OrderService =  require('../services/order.svc');
// const { JsonWebTokenError } = require('jsonwebtoken');
var jwt = require('jsonwebtoken');

class Ordercontroller{
    async insert(req,res){
        try{
            var decodedtoken = await jwt.decode(req.headers.authorization);
            
            // console.log(decodedtoken);
            // console.log(decodedtoken.mobile._id);
            // console.log(req.body.userId);
            if(decodedtoken !== null){
                req.body.userId = decodedtoken.mobile._id;
                var order = await OrderService.create(req.body);
                // console.log(order);
                res.status(201);
                res.send({status: 'order created successfully', order});
            }
            else{
                res.status(401);
                res.send({status: 'unauthorized user or invalid token'});
            }
            

        }
        catch(err){
            console.log(err);
            res.status('500');
            res.send({error: 'server error', errorDescription: err});
        }
    }

    async GetOrders(req,res){
        try{
            var decodectoken = await jwt.decode(req.headers.authorization);
            

            if(decodectoken !== null){
                var id = decodectoken.mobile._id;
                var allorders = await OrderService.getallorders({userId: id})
                res.status(200);
                res.send({status: 'success', allorders});
            }
            else{
                res.status(401);
                res.send({status: 'unauthorized user'});
            }

            
        }
        catch(err){
            console.log(err);
            res.status(500);
            res.send({error: 'server error', errorDescription: err});

        }
    }
}

module.exports = new Ordercontroller();