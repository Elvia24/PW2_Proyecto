const { Router } = require('express');
const productoCtrl = require('../controllers/producto_controllers.js');

const productoRoutes = Router();

productoRoutes.get('/', productoCtrl.getAllProducts);
//productoRoutes.get('/:id', productoCtrl.getProductById);
//productoRoutes.post('/', productoCtrl.createProduct);
//productoRoutes.put('/:id', productoCtrl.updateProduct);
//productoRoutes.delete('/:id', productoCtrl.deleteProduct);

module.exports = productoRoutes;
