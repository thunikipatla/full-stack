var OrderService = require('../services/order.svc');
var jwt = require('jsonwebtoken');

class Ordercontroller {

    async insert(req,res){
        try{
            var decodedtoken = await jwt.decode(req.headers.authorization);
            if(decodedtoken != null){
                req.body.userid = decodedtoken.mobile._id;
                var orders = await OrderService.create(req.body);
                res.status(201);
                res.send({status: true, orders})
            }
            else{
                res.status(401);
                res.send({status: false, description: "invalid User"});
            }

        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }

    async getalluserorders(req,res){
        try{
            var decodedtoken = await jwt.decode(req.headers.authorization);
            if(decodedtoken != null){
                var id = decodedtoken.mobile._id;
                var alluserorders = await OrderService.getalluserorders({userid: id});
                res.status(200);
                res.send({status: true, alluserorders})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }


}

module.exports = new Ordercontroller();