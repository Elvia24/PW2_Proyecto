const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const categoryCtrl = require('../controllers/category_controllers.js');
const { validateCategory, validateCategoryUpdate, validateCategoryDeletion } = require('../middlewares/validations/categoryValidations');

const categoriaRoutes = Router();

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

categoriaRoutes.get('/pages', (req, res) => {
    const { page, limit } = req.query;
    categoryCtrl.getPageCategory(req, res, page, limit);
});
categoriaRoutes.get('/', categoryCtrl.getAllCategory);
categoriaRoutes.get('/user', categoryCtrl.getUserCategory);
categoriaRoutes.post('/', upload.single('categoryImage'),validateCategory, categoryCtrl.addCategory);
categoriaRoutes.put('/', upload.single('categoryImage'),validateCategoryUpdate, categoryCtrl.updateCategory);
categoriaRoutes.delete('/',validateCategoryDeletion, categoryCtrl.deleteCategory);

module.exports = categoriaRoutes;