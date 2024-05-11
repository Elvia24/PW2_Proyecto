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

          console.log(results);
          const token = jwt.sign({ id: user.userID}, secretKey, { expiresIn: '1h' });

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

const getUser = async (req, res) => {
  try {
      const userId = req.user.id;  
      
      const args = ['SE', userId, '', '', '', '', '', 1];

      const [results] = await pool.promise().query('CALL spGestionUsuarios(?, ?, ?, ?, ?, ?, ?, ?)', args);
     

      if (results[0].length > 0) {
          const user = results[0][0];  
          res.json({
              success: true,
              data: {
                  userID: user.userID, 
                  username: user.username, 
                  email: user.email, 
                  direccion: user.direccion,
                  role: user.role
              }
          });
      } else {
          res.status(404).json({ success: false, message: "Usuario no encontrado" });
      }
  } catch (error) {
      console.error('Error al obtener datos del usuario:', error.message);
      res.status(500).json({ success: false, message: 'Error al procesar la solicitud' });
  }
};

module.exports = {
login,
registro,
getUser 
};