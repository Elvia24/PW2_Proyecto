const pool = require('../config/db.js');
const mysql = require('mysql2');
require('dotenv').config();






const login = async (req, res) => {
  res.send('Esto es para login');
};

//const registro = async (req, res) => {
//  res.send('Esto es para registro');
//};

const registro = async (req, res) => {
  
  try {
    
    const { username, email, password, direccion, role } = req.body;
    
    // Prepara los argumentos para el stored procedure, incluyendo 'IN' para la acción de inserción
    const args = ['IN', null, username, email, password, direccion, role];
  
    await pool.promise().query('CALL spGestionUsuarios(?, ?, ?, ?, ?, ?, ?)', args);
    
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario", error: error.message });
  }
};


module.exports = {
  login,
  registro
};