var express = require('express');

var app = express();

app.use(express.json());

var products=[
    {
        pid: 1,
        name: 'product 1',
        brand: 'brand 1'
    },
    {
        pid: 2,
        name: 'product2',
        brand: 'brand 2'
    }
];

app.get('/getproducts', function(req,res){
    res.send(products);
});

app.post('/updateproducts', function(req,res){
    var product = req.body;
    products.push(product);
    res.send(products);
})


app.delete('/deleteproducts/:pid', function(req,res){

    var pidn = req.params.pid;
    
    console.log(req.params.pid);
    console.log(pidn);
    // res.send(products);

    // for(i=0; i<products.length; i++){
    //     res.send(products);
        
    //     // if(products[i] == pid){

    //     //     // product=products.pop(pid[i]);
    //     //     // products.push(product);
    //     //     res.send(products);
            
    //     // }
    // }
});

app.listen('9011', function(){
    console.log('Server started');
});



