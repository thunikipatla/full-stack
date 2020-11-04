var Usermodel = require('../models/user.model');

class Userservice {
    create(data){
        var user = new Usermodel(data);
        return user.save(data);
    }
    getbymobile(mobile){
       return  Usermodel.findOne({mobile});
    }
    getalluser(){
        return Usermodel.find();
    }
}

module.exports = new Userservice();