var UserService = require('../services/user.svc');
var jwt = require('jsonwebtoken');

class Usercontroller {
    async register(req,res){
        try{
            var mobile = await UserService.getbymobile(req.body.mobile);
            if(mobile){
                res.status(409);
                res.send({status: false, description: 'Mobile number is already registered' })
            }
            else{
                var user = await UserService.create(req.body);
                var token = jwt.sign({'mobile':user}, 'secreat', {expiresIn: 60*60})
                res.status(201);
                res.send({status: true, 'token': token, user})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description:'server error'})
        }

    }
    async login(req,res){
        try{
            var mobile = await UserService.getbymobile(req.body.mobile);
            if(mobile){
                var eneteredpassword = req.body.password;
                if(eneteredpassword === mobile.password){
                    var token = jwt.sign({'mobile':mobile}, 'secreat', {expiresIn: 60*60});
                    res.status(200);
                    res.send({status: true, 'token': token, description: 'login succcess'})
                }
                else{
                    res.status(401);
                    res.send({status: false, description: 'incorrect password'})

                }
            }
            else{
                res.status(409);
                res.send({status: false , description: 'mobile number not regsitred'})
            }
        }
        catch(error){
            console.log(error);
            res.status(500);
            res.send({status: false, description: 'server error'})
        }
    }
}

module.exports = new Usercontroller();