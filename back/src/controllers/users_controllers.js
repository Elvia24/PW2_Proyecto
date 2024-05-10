const pool = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;



const login = async (req, res) => {
  try {
      const { username, contrasena } = req.body;
      const [results] = await pool.promise().query('CALL spLoginUsuario(?, ?)', [username, contrasena]);

      if (results[0].length > 0) {
          const user = results[0][0];
          const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '2h' });

          res.json({
              success: true,
              message: 'Inicio de sesión exitoso',
              token: token
          });

          console.log('Token'+token)
      } else {
          res.status(401).json({ success: false, message: 'Usuario o contraseña incorrecta' });
      }
  } catch (error) {
      console.error('Error al intentar iniciar sesión:', error.message);
      res.status(500).json({ success: false, message: 'Error al procesar la solicitud de inicio de sesión' });
  }
};


const registro = async (req, res) => {
  
  try {
    
    const { username, email, password, direccion, role } = req.body;
    const image = '';
    // Prepara los argumentos para el stored procedure, incluyendo 'IN' para la acción de inserción
    const args = ['IN', null, username, email, password, direccion, image, role];
  
    await pool.promise().query('CALL spGestionUsuarios(?, ?, ?, ?, ?, ?, ?, ?)', args);
    
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario", error: error.message });
  }
};


module.exports = {
  login,
  registro
};