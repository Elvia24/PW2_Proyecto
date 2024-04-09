const pool = require('../config/db.js');

require('dotenv').config();

const getAllProducts = async (req, res) => {
    try{
    const [results] = await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?)', ['SE', 0, 0, 0, '', '', 0, 0]);

    
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
    getAllProducts
    
  };

