const pool = require('../config/db.js');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const addCategory = async (req, res) => {
    try {
        const { userID, nombre, descripcion} = req.body;
        const categoryImage = req.file; // Archivo de imagen subido
        
        // Verifica si se ha subido una imagen
        if (!categoryImage) {
            return res.status(400).json({ success: false, message: 'Debe proporcionar una imagen para la categoria' });
        }

        // Construye la URL de la imagen
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${categoryImage.filename}`;

        
        const [result] = await pool.promise().query('CALL spGestionCategorias(?, ?, ?, ?, ?, ?,?, ?)', [
            'IN', userID, userID, nombre, descripcion, imageUrl,userID, userID
        ]);

        res.status(201).json({ success: true, message: 'categoria agregada correctamente', productId: result.insertId });
    } catch (error) {
        console.error('Error al agregar categoria:', error.message);
        res.status(500).json({ success: false, message: 'Error al agregar categoria', error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { userID, categoryID, nombre, descripcion } = req.body;
        const categoryImage = req.file; // Archivo de imagen subido

        let imageUrl = null;

        // Verifica si se ha subido una nueva imagen
        if (categoryImage) {
            // Construye la URL de la nueva imagen
            imageUrl = `${req.protocol}://${req.get('host')}/uploads/${categoryImage.filename}`;
        }

        const [result] = await pool.promise().query('CALL spGestionCategorias(?, ?, ?, ?, ?, ?,?, ?)', [
            'UP', categoryID, userID, nombre, descripcion, imageUrl, userID, userID
        ]);

        res.status(200).json({ success: true, message: 'Categoría actualizada correctamente' });
    } catch (error) {
        console.error('Error al actualizar categoría:', error.message);
        res.status(500).json({ success: false, message: 'Error al actualizar categoría', error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { userID, categoryID } = req.body;

        const [result] = await pool.promise().query('CALL spGestionCategorias(?, ?, ?, ?, ?, ?,?, ?)', [
            'BO', categoryID, userID, '', '', '',userID,userID
        ]);

        // Verifica si se encontró y eliminó la categoría
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Categoría no encontrada o el usuario no coincide' });
        }

        res.status(200).json({ success: true, message: 'Categoría eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar categoría:', error.message);
        res.status(500).json({ success: false, message: 'Error al eliminar categoría', error: error.message });
    }
};

const getAllCategory = async (req, res) => {
    try {
        const [results] = await pool.promise().query('CALL spGestionCategorias(?, ?, ?, ?, ?, ?,?, ?)', ['SE2', 0, 0, '', '', '',0, 0,]);

        if (results[0].length > 0) {
            
            res.json({
                success: true,
                message: 'Categorias encontrados',
                data: results[0]
            });
        } else {
            res.status(401).json({ success: false, message: 'No se encontraron categorias' });
        }
    } catch (error) {
        console.error('Error al buscar productos:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getUserCategory = async (req, res) => {
    const userID = req.headers.userid;
    console.log(userID);
    
    try {
        const [results] = await pool.promise().query('CALL spGestionCategorias(?, ?, ?, ?, ?, ?,?, ?)', ['SE', 0, userID, '', '', '' ,0,0]);

        if (results[0].length > 0) {
            
            res.json({
                success: true,
                message: 'Categorias encontrados del usuario',
                data: results[0]
            });
        } else {
            res.status(401).json({ success: false, message: 'No se encontraron categorias' });
        }
    } catch (error) {
        console.error('Error al buscar categorias:', error.message);
        res.status(500).json({ message: error.message });
    }
};

const getPageCategory = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 4; 
    const offset = (page - 1) * limit;
    console.log(req.query.page);
    console.log(req.query.limit);
    try {
        const [results] = await pool.promise().query(
            'CALL spGestionCategorias(?, ?, ?, ?, ?, ?, ?, ?)',
            ['SE3', 0, 0,'', '', '', limit, offset] 
        );
        
        if (results[0] && results[0].length > 0) {
            // Asume que cada producto ya tiene un campo `productImage` que contiene la URL de la imagen
            const productos = results[0];

            // Supone que hay un campo 'totalProductos' en el segundo elemento del conjunto de resultados que devuelve el número total de productos disponibles
            const totalProductos = productos[0].total;
            
            res.json({
                success: true,
                message: 'Categorias encontrados',
                data: productos,
                pagination: {
                    currentPage: page,
                    totalPages: Math.ceil(totalProductos / limit)
                }
            });
        } else {
            res.status(404).json({ success: false, message: 'No se encontraron categorias' });
        }
    } catch (error) {
        console.error('Error al buscar categorias:', error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCategory,
    addCategory,
    getPageCategory,
    getUserCategory,
    updateCategory,
    deleteCategory
    
  };

