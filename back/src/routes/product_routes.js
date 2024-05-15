const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const productoCtrl = require('../controllers/producto_controllers.js');

const productoRoutes = Router();

// Setup for multer (for handling file uploads)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/')  
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
  
const upload = multer({ storage: storage });

productoRoutes.get('/pages', (req, res) => {
    const { page, limit } = req.query;
    productoCtrl.getPageProducts(req, res, page, limit);
});
productoRoutes.get('/', productoCtrl.getAllProducts);
productoRoutes.get('/user', productoCtrl.getUserProducts);
productoRoutes.post('/', upload.single('productImage'), productoCtrl.addProduct);
productoRoutes.put('/', upload.single('productImage'), productoCtrl.updateProduct);
productoRoutes.delete('/', productoCtrl.deleteProduct);


module.exports = productoRoutes;