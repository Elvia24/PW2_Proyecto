const pool = require('../config/db.js');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const addProduct = async (req, res) => {
    try {
        const { userID, categoryID, nombre, descripcion, precio, cantidad } = req.body;
        const productImage = req.file; // Archivo de imagen subido
        
        // Verifica si se ha subido una imagen
        if (!productImage) {
            return res.status(400).json({ success: false, message: 'Debe proporcionar una imagen para el producto' });
        }

        // Lee el contenido del archivo de imagen
        const imageData = fs.readFileSync(productImage.path);
        
        // Inserta el nuevo producto en la base de datos
        const result = await pool.promise().query(
            'INSERT INTO Productos (userID, categoryID, nombre, productImage, descripcion, precio, cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [userID, categoryID, nombre, imageData, descripcion, precio, cantidad]
        );



        // Borra el archivo temporal de la imagen
        fs.unlinkSync(productImage.path);

        res.status(201).json({ success: true, message: 'Producto agregado correctamente', productId: result.insertId });
    } catch (error) {
        console.error('Error al agregar producto:', error.message);
        res.status(500).json({ success: false, message: 'Error al agregar producto', error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try{
    const [results] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?)', ['SE', 0, 0, 0, '','', '', 0, 0]);

    
    if (results[0].length > 0) {
        res.json({
            success: true,
            message: 'Productos encontrados',
            data: results[0]
        });
    } else {
      
      res.status(401).json({ success: false, message: 'No se encontraron productos' });
    }
    }
     catch (error) {
        console.error('Error al buscar productos:', error.message);
        res.status(500).json({ message: error.message });
      }

   
};

module.exports = {
    getAllProducts,
    addProduct
    
  };

