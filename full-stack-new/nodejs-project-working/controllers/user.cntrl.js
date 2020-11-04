var UserService = require('../services/user.svc');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

class Usercontroller{
    async createuser(req,res){
        try{
            var user = await UserService.GetBymobile(req.body.mobile);
            if(user){
                console.log('mobile number alredy exists');
                res.status(409);
                // res.send('mobile is number is alredy exists')
                res.send({status:'mobile already registred'})
            }
            else{
                var user = await UserService.create(req.body);
                var token = jwt.sign({'mobile': user.mobile}, 'screat', {expiresIn: 60*60})
                res.status(201);
                // res.send(user);
                res.send({'token': token, status: 'registration successfull'});           }

        }
        catch(err){
            console.log(err);
            res.status(409);
            res.send('server error')

        }

    }

async Login(req,res){
    try{
        var mobile = await UserService.GetBymobile(req.body.mobile);
        var enteredpassword = req.body.password;

        
        if(mobile){
            if(enteredpassword === mobile.password){
                var token = jwt.sign({'mobile': mobile}, 'screat', {expiresIn: 60*60});
                // console.log(token);
                // console.log('Login success');
                res.status(200);
                res.send({'token':token, status: 'Login success'});
            }
            else{
                res.status(409);
                // res.send('Incorrect password')
                res.send({status: 'incorrect password'})
            }
        
        }
        else{
            res.status(409);
            // res.send('Mobile number not registred');
            res.send({status: 'mobile number not registred'})
        }

    }
    catch(err){
        console.log(err);
        res.status(409);
        res.send('server error');

    }
}
async sendemail(req,res){
    try{
        var email = await UserService.GetbyEmail(req.body.email);

        if(email){
            var token = jwt.sign({'mobile':email.mobile},'secreat', {expiresIn: 60* 60});
            console.log(token);
            var forntendurl = `http://localhost:9011/updatepassword/?email=${email.email}&token=${token}`
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'srinivastece@gmail.com',
                  pass: '492871724'
                }
              });
              
              var mailOptions = {
                from: 'srinivastece@gmail.com',
                to: req.body.email,
                subject: 'Reset password',
                // text: 'You can reset the password using the below link'
                html: `
                    <html>
                    <head>
                            <body>
                                <h2> Hello ${email.firstname} ${email.lastname}</h2>
                                <h3> Please use the below link to update the password</h3>
                                <a href="${forntendurl}"> Reset password link</a>
                            
                            </body>
                    </head>
                    </html>
                `
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  res.status(200);
                //   res.send({'token': token, 'email': req.body.email});
                res.send({'token': token, 'email': req.body.email, status: 'we have sent an email to you to reset the password'});

                }
              });

        }

    }
    catch(err){

    }
}

async updatepassword(req,res){
    try{
        var email = await UserService.GetbyEmail(req.body.email);

        if(email){
            var jwttokencheck = jwt.verify(req.body.token,'secreat',async (err,decoded)=>{
                if(err){
                    // console.log(err);
                    res.status(409);
                    // res.send('invalid token')
                    res.send({status: 'reset link expired, please please hit on forgot password again'});
                }
                else{
                    console.log('valid token')
                    var newdata = await UserService.updatepass({id:email._id, password: req.body.password});
                    console.log(email._id);
                    console.log(newdata);
                    res.status(201);
                    res.send({status: 'password updated'});
                }
            }) 
        }
        else{
            console.log('email is not registred')
            res.status(409);
            res.send({status: 'Invalid Email address'});
        }

        

    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send('Server Error');

    }
}


}

module.exports = new Usercontroller();