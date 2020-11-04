var OrderModel = require('../models/order.model');

 class Orderservice{
        create(data){
            // var order = new OrderModel(data);
            return OrderModel.create(data);
        }
        getallorders(id){
            return OrderModel.find(id);
        }
        
 }

 module.exports = new Orderservice();