var Adminmodel = require('../models/admin.model');

class Adminservice{
    addproduct(data){
        var product = new Adminmodel(data);
        return product.save();
    }
    getallproduct(){
        return Adminmodel.find();
    }

    getbycatgeory(productcatgeory){
        return Adminmodel.findById({productcatgeory:productcatgeory});
        
    }
    getbyproductandupdate(productname,price){
        return Adminmodel.findOneAndUpdate({productname: productname},{price: price})
    }
}

module.exports = new Adminservice();