var OrderModel = require('../models/order.model');

class Orderservice {
    create(data){
        return OrderModel.create(data);
    }
    getalluserorders(id){
        return OrderModel.find(id);
    }
    

}

module.exports = new Orderservice();