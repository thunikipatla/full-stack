var UserModel = require('../models/user.model');
const { findByIdAndUpdate } = require('../models/user.model');

class Userservice{
    create(data){
        var user = new UserModel(data);
        return user.save()
    }
    GetById(id){
        return UserModel.findById(id);
    }
    GetBymobile(mobile){
        return UserModel.findOne({mobile})
    }
    GetbyEmail(email){
        return UserModel.findOne({email})
    }
    updatepass(data){
        return UserModel.findByIdAndUpdate(data.id,{
            $set: {
                password: data.password
            }
        }, {new: true});
    }
    
}

module.exports = new Userservice();