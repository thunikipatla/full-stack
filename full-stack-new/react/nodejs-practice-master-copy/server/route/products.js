var Product= require('../model/products');

exports.addProduct=function(request, response){
    console.log(request.body);
    // take data from frontend

      var productId=request.body.productId;
      var productName=request.body.productName;
      var productDescription=request.body.productDescription;
      var productURL=request.body.productURL;
      var productPrice= request.body.productPrice;
      console.log("productPrice",productPrice);
      var category= request.body.category;
      var newProduct=new Product({
        productId:productId,
        productName:productName,
        productDescription:productDescription,
        productURL:productURL,
        productPrice:productPrice,
        category:category
      })
      newProduct.save();
      console.log("newProduct",newProduct)
      response.send({status:true});
     
    // use mongodb and save document in DB    
    }
exports.getAllProducts= function(request,response){
  Product.find({},function(err,docs){
    console.log(docs);
    response.send(docs);
  })
}

exports.getProductById=function(request,response){
     var productId=request.params.productId;
     Product.find({productId:productId},function(err,doc){
       if(err){
         response.send({"message":"error occured"});
       }
       else
       {
        response.send(doc[0]);
       }
     })
    }
    exports.deleteProduct= function(request,response){
      console.log("Inside");
      var productId=request.params.productId;

      Product.find({productId:productId},function(err,doc){
        if(err){
          response.send({"message":"error occured"});
        }
        else
        {
            Product.remove({productId:productId},function(err){
                if(err){
                  console.log(err);
                  return response.send({status: false});
                }
                else
                {
                  return response.send({status: true});
                }
            })
        }
      })
    }

    exports.editProduct=function(request,response){
      console.log("inside")
      var productId=request.params.productId;;
      var productName=request.body.productName;
      var productDescription=request.body.productDescription;
      var productURL=request.body.productURL;
      var productPrice= request.body.productPrice;
      var category= request.body.category;
      var updatedProduct={
        productId:productId,
        productName:productName,
        productDescription:productDescription,
        productURL:productURL,
        productPrice:productPrice,
        category:category
      }
      console.log("updated Product",updatedProduct);
      Product.update({productId:productId},updatedProduct,(err,raw) =>{
        if(err){
            console.log(err);
            response.send({status:false})
        }
        else
        {
          response.send({status:true});
        }
      })
    }