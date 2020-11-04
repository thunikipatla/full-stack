var ProductService = require('../services/product.svc');

class Productcontroller{
    async insert(req,res){
        try{
            var product = await ProductService.FindById(req.body.productmodel);
            if(product){
                console.log('product already added');
                res.status(409);
                res.send({status: 'product already added'});
            }
            else{
                var product = await ProductService.create(req.body);
                res.status(201);
                res.send({status: 'product successfully added',product })
            }

        }
        catch(err){
            console.log(err);
            res.status(409);
            res.send('Server error');

        }
    }
    async deleteproduct(req,res){
        try{
            var product = await ProductService.FindById(req.body.productmodel);
            if(product){
                console.log('product exists');
                var deletedproduct = await ProductService.delete(req.body.productmodel);
                res.status(201);
                res.send({status: 'product deleted successfully',deletedproduct});
            }
            else{
                res.status(409);
                // res.send('product not found to delete')
                res.send({status: 'Product not found to delete'})
            }
        }
        catch(err){
            console.log(err);
            res.send('server error');

        }
    }
    async update(req,res){
        try{
            // var product = await ProductService.FindById(req.body.productmodel);
            // if(product){
            var newproduct = await ProductService.update(req.body);
            res.status(201);
            // res.send(newproduct);
            res.send({status: 'product updated successfully',newproduct})       

            // }
            // else{
            //     console.log('product not found');
            //     res.status(409);
            //     res.send('product not found to update')
            // }
        }
        catch(err){
            console.log(err)
            res.status(409);
            res.send('server error');

        }
    }
    async getproducts(req,res){
        try{
            var allproducts = await ProductService.Getallproduct();
            allproducts.map(product=>{
                product.imgsrc=`${req.protocol}://${req.host}:9011/${product.imgsrc}`
            })
            
            if(allproducts){
                res.status(200);
                // res.send(allproducts);
                res.send({status: 'displaying all products', allproducts})
            }
            else{
                res.status(409);
                // res.send('products not found')
                res.send({status: 'products not found'})
            }

        }
        catch(err){
            console.log(err);
            res.status(409);
            res.send('server error');

        }
    }

}

module.exports = new Productcontroller();