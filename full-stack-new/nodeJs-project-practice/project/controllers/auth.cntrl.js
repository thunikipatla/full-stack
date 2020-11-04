var authservice = require('../services/auth.svc');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class AuthController {
    async register(req,res){
        try{
            var user = await authservice.getByMobile(req.body.mobile);
            if(user){
                res.status(409);
                res.send({error: 'conflict', errordescription: 'Mobile number alredy exists'});
            }
            else{
               var hashedpassword = await bcrypt.hash(req.body.password, 5);
                req.body.password = hashedpassword;
                var user = await authservice.create(req.body);
                var token = await jwt.sign({mobile:user.mobile},'secret',{expiresIn: 60 * 60});
                res.status(201);
                res.send({data: {token}});
            }
        }
        catch(err){
            console.log(err);
            res.status(409);
            res.send({error: 'server error'});
        }
    }
    async login(req,res){
        try{
            var user = await authservice.getByMobile(req.body.mobile);
            if(user){
                var passwordcheck = await bcrypt.compare(req.body.password, user.password);
                if(passwordcheck){
                    var token = await jwt.sign({mobile:user.mobile}, 'secret', {expiresIn: 60 * 60});
                    res.status(200);
                    res.send({data: {token}});
                    // res.send('Login successfull')
                }
                else{
                    res.status(409);
                    res.send('Incorrect password')
                }
    
            }
            else{
                res.status(409);
                res.send('Invalid mobile number');
            }
        }
        catch(err){
            console.log(err);
            res.send(err);
        }
    }
}

module.exports = new AuthController();