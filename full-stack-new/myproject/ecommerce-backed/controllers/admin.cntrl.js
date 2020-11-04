var AdminService = require('../services/admin.svc');

class Admincontroller{

    async login(req,res){
        try{
            var enteredpassword = req.body.password;
            var actualpassword = 'Admin@123';
            var enteredusername = req.body.username;
            var actualusername = 'admin'

            if(enteredpassword === actualpassword && enteredusername === actualusername){
                res.status(200);
                res.send({status: true, description: 'login success'})
            }
            else{
                res.status(401);
                res.send({status: false, description: 'incorrect username/password'})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }

    async addproduct(req,res){
        try{
            var product = await AdminService.addproduct(req.body);
            res.status(201);
            res.send({status: true, description: 'product added', product})

        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }
    async updateproduct(req,res){
        try{
            var product = await AdminService.getbyproductandupdate(req.body.productname,req.body.price);
            res.status(201);
            res.send({status: true, description: 'product updated'});
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }
    async getallproduct(req,res){
        try{
            var products = await AdminService.getallproduct();
            // console.log(products);
            if(products >= "1"){
                res.status(200);
                res.send({status: true, products})
            }
            else{
                res.status(409);
                res.send({status: false, description: 'no products was added'})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }
    async getbycatgeory(req,res){
        try{
            var products = await AdminService.getbycatgeory(req.body.productcatgeory);
            if(products >= "1"){
                res.status(200);
                res.send({status: true, products})
            }
            else{
                res.status(409);
                res.send({status: false, description: 'no product found with that category'})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }


}

module.exports = new Admincontroller();