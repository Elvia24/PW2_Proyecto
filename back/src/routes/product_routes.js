const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const productoCtrl = require('../controllers/producto_controllers.js');

const productoRoutes = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/')  // Asegúrate de que esta carpeta exista en tu proyecto
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
  const upload = multer({ storage: storage });
  module.exports = { upload };
  



productoRoutes.get('/', productoCtrl.getAllProducts);
//productoRoutes.get('/:id', productoCtrl.getProductById);
productoRoutes.post('/', upload.single('productImage'), productoCtrl.addProduct);
//productoRoutes.put('/:id', productoCtrl.updateProduct);
//productoRoutes.delete('/:id', productoCtrl.deleteProduct);

module.exports = productoRoutes;
