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

        // Construye la URL de la imagen
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${productImage.filename}`;

        
        const [result] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            'IN', userID, userID, categoryID, nombre, imageUrl, descripcion, precio, cantidad, cantidad, cantidad
        ]);

        res.status(201).json({ success: true, message: 'Producto agregado correctamente', productId: result.insertId });
    } catch (error) {
        console.error('Error al agregar producto:', error.message);
        res.status(500).json({ success: false, message: 'Error al agregar producto', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { userID, productID, categoryID, nombre, descripcion, precio, cantidad } = req.body;
        const productImage = req.file; // Archivo de imagen subido

        let imageUrl = null;

        // Verifica si se ha subido una nueva imagen
        if (productImage) {
            // Construye la URL de la nueva imagen
            imageUrl = `${req.protocol}://${req.get('host')}/uploads/${productImage.filename}`;
        }

        const [result] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            'UP', userID, productID, categoryID, nombre, imageUrl, descripcion, precio, cantidad, cantidad, cantidad
        ]);

        res.status(200).json({ success: true, message: 'Producto actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar producto:', error.message);
        res.status(500).json({ success: false, message: 'Error al actualizar producto', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { userID, productID } = req.body;

        const [result] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            'BO', userID, productID, 1, '', '', '', 0, 0, 0, 0
        ]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Producto no encontrado o el usuario no coincide' });
        }

        res.status(200).json({ success: true, message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error.message);
        res.status(500).json({ success: false, message: 'Error al eliminar producto', error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const [results] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['SE3', 0, 0, 0, '', '', '', 0, 0, 0, 0]);

        if (results[0].length > 0) {
            
            res.json({
                success: true,
                message: 'Productos encontrados',
                data: results[0]
            });
        } else {
            res.status(401).json({ success: false, message: 'No se encontraron productos' });
        }
    } catch (error) {
        console.error('Error al buscar productos:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getUserProducts = async (req, res) => {
    const userID = req.headers.userid;
    console.log(userID);
    
    try {
        const [results] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?,?,?,?)', ['SE4', 0, userID, 0, '', '', '', 0, 0,0,0]);

        if (results[0].length > 0) {
            
            res.json({
                success: true,
                message: 'Productos encontrados del usuario',
                data: results[0]
            });
        } else {
            res.status(401).json({ success: false, message: 'No se encontraron productos' });
        }
    } catch (error) {
        console.error('Error al buscar productos:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getPageProducts = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 8; 
    const offset = (page - 1) * limit;
    
    try {
        const [results] = await pool.promise().query(
            'CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            ['SE', 0, 0, 0, '', '', '', 0, 0, limit, offset] 
        );
        
        if (results[0] && results[0].length > 0) {
            // Asume que cada producto ya tiene un campo `productImage` que contiene la URL de la imagen
            const productos = results[0];

            // Supone que hay un campo 'totalProductos' en el segundo elemento del conjunto de resultados que devuelve el número total de productos disponibles
            const totalProductos = productos[0].total;
            
            res.json({
                success: true,
                message: 'Productos encontrados',
                data: productos,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalProductos / limit)
                }
            });
        } else {
            res.status(404).json({ success: false, message: 'No se encontraron productos' });
        }
    } catch (error) {
        console.error('Error al buscar productos:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', ['SE2', id, 0, 0, '', '', '', 0, 0, 0, 0]);

        if (results[0].length > 0) {
            res.json({
                success: true,
                message: 'Producto encontrado',
                data: results[0][0]
            });
        } else {
            res.status(404).json({ success: false, message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar producto:', error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    getPageProducts,
    getUserProducts,
    updateProduct,
    deleteProduct,
    getProductById
    
  };

