var AuthService = require('../services/auth.svc');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class AuthController{
    async register(req,res){
        try{
        var user = await AuthService.findByMobile(req.body.mobile);
        if(user){
            res.status(409);
            res.send('Mobile number is already registered');
        }
        else{
            var hashedpassword = await bcrypt.hash('req.body.password',5);
            req.body.password = hashedpassword;
            var user = await AuthService.create(req.body);
            var token = await jwt.sign({mobile:user.mobile},'secret',{expiresIn: 60 * 60});
            res.status(200);
            res.send({data: token});
        }

        }
        catch(err){
            console.log(err);
            res.status(409);
            res.send(err);
        }
    }
    async login(req,res){
        try{
            var user = await AuthService.findByMobile(req.body.mobile);
            if(user){
                var passwordcheck = await bcrypt.compare(req.body.password, user.password);
                console.log(passwordcheck);
                if(passwordcheck){
                    console.log('entered password check')
                    res.status(200);
                    res.send('Login Success');
                }
                else{
                    res.status(409);
                    res.send('Incorrect password');

                }
            }
            else{
                res.status(409);
                res.send('mobile number is not registred');
            }
        }
        catch(err){

        }
    }
}

module.exports = new AuthController();