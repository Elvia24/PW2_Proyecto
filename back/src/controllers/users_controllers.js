const pool = require('../config/db.js');

require('dotenv').config();


//const login = async (req, res) => {
//  res.send('Esto es para login');
//};

const login = async (req, res) => {
  try {
    const { username, contrasena } = req.body;

    
    const [results] = await pool.promise().query('CALL spLoginUsuario(?, ?)', [username, contrasena]);

    
    if (results[0].length > 0) {
      res.json({
        success: true,
        message: 'Inicio de sesión exitoso',
        data: results[0][0] 
      });
    } else {
      
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrecta' });
    }
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error.message);
    res.status(500).json({ success: false, message: 'Error al procesar la solicitud de inicio de sesión' });
  }
};

//const registro = async (req, res) => {
//  res.send('Esto es para registro');
//};

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