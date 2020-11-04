var UserModel = require('../models/user.model');


class UserService {
   create(data){
       var user = new UserModel(data);
       return user.save();

   }
   getById(id){
       return UserModel.getById(id);
   }
   getByMobile(mobile){
       return UserModel.findOne({mobile})
   }
   getByEmail(email){
       return UserModel.findOne({email});
   }
}

module.exports = new UserService();