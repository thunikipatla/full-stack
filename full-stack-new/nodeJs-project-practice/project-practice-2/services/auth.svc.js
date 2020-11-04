var UserModel = require('../models/user.model');

class AuthService{
    create(data){
        var user = new UserModel(data);
        return user.save();
    }
    findByid(id){
        return UserModel.findById(id);
    }
    findByEmail(email){
        return UserModel.findOne({email});
    }
    findByMobile(mobile){
        return UserModel.findOne({mobile});
    }
}

module.exports = new AuthService();