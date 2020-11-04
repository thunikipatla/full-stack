var User = require("../model/user");
var jwt = require('jsonwebtoken');
const user = require("../model/user");

exports.getAllUsernames= function(request,response){
     var array=["ravikumar","rajesh","kiran"];
      response.send(array);
}
exports.registerUser = function (req, res) {
    console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var emailId = req.body.emailId;
    var password = req.body.password;
    var mobileNumber = req.body.mobileNumber;
    var newUser = new User({
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password,
        mobileNumber: mobileNumber
    });
    console.log(newUser)
    User.findOne({ emailId: emailId }, function (err, event) {
        if (err) {
            res.send({status : false, message:"Error occured while finding if email exists", err});
            console.error(err);
        }
        else {
            if (event == null) {
                newUser.save(function (err1, result) {
                    if (err1) {
                        res.send({ status: false, message: "Registration failed", err1 });
                        console.error(err1);
                    } else {
                        var token = jwt.sign({mobile:user.mobileNumber},'secret',{ expiresIn: 60 * 60 })
                        // res.send({ status: true, message: "Registration successful", result });
                        // console.log(result);
                        res.send({ status: true, token: token})
                        
                    }
                });
            } else {
                res.send({ status: false, message: "Email already exists:", event });
                console.log("email already exists:" + event);
            }
        }
    });
}
exports.loginUser = function (req, res){
    var emailId = req.body.emailId;
    var password = req.body.password;
    User.findOne({emailId : emailId}, function (err, obj) {
       if(err){
           res.send({status: false, message: "error occured while procesing login request"});
           console.log(err);
       } else {
           if(obj == null){
               res.send({status : false, message : "User not registered"});
           } else {
               if(obj.password == password){
                var token = jwt.sign({mobile:user.mobileNumber},'secret',{ expiresIn: 60 * 60 })
                //    res.send({status : true, message : "login successful", obj});
                //    console.log(obj);
                res.send({ status: true, token: token})
               } else {
                   res.send({status : false, message : "Incorrect password"});
                   console.log(obj);
               }
           }
       }
    });
}



