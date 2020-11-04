var express = require('express');
var router = express.Router();
var multer = require('multer');
var ProductController = require('../controllers/product.cntrl');

var storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb)=>{
        let filename = Date.now() + "-" + file.originalname;
        req.body.imgsrc = filename;
        cb(null, filename);
    }
})

var uploadimage = multer({storage});

router.post('/addproduct', uploadimage.single('image'),ProductController.insert);
router.post('/deleteproduct', ProductController.deleteproduct);
router.post('/updateproduct', ProductController.update);
router.get('/getallproducts', ProductController.getproducts);

module.exports = router;
