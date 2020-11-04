var ProductModel = require('../models/product.model');

class Productservice{
    create(data){
        var product = new ProductModel(data);
        return product.save();
    }
    FindById(id){
        return ProductModel.findOne({'productmodel':id})
    }
    delete(id){
        return ProductModel.findOneAndRemove({'productmodel':id})
    }
    update(id){
        return ProductModel.findOneAndUpdate({'productmodel':id})
    }
    Getallproduct(){
        return ProductModel.find();      
    }
   
}

module.exports = new Productservice();