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

const putUser = async (req, res) => {
  try {
    const { userId, username, email, direccion } = req.body;
    //const hashedPassword = password ? await bcrypt.hash(password, 8) : undefined; 
    
    const image = ''; 
    const args = ['UP', userId, username, email, image, direccion, image, 1];

    await pool.promise().query('CALL spGestionUsuarios(?, ?, ?, ?, ?, ?, ?, ?)', args);

    res.json({ message: "Datos del usuario actualizados con éxito" });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error.message);
    res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
  }
};

const addUserVentas = async (req, res) => {
  const { userID, items, total, fecha, pago } = req.body;
  const args = ['IN', 0, userID, fecha, pago, total];
  
    try {       

        // Insertar en la tabla Ventas
        const [ventaResult] = await pool.promise().query('CALL spGestionVentas(?, ?, ?, ?, ?, ?)', args);

        const saleID = ventaResult[0][0].new_saleID;
        console.log(saleID);
        // Insertar en la tabla DetalleVenta
        for (let item of items) {
          await pool.promise().query('CALL spGestionDetalleVenta(?, ?, ?, ?, ?, ?, ?)', ['IN',0,saleID, item.productID, item.precio, item.cantidad, item.subtotal]);

           await pool.promise().query('CALL spGestionProductos(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            'UP2', item.productID, 0, 0, '', '', '', 0, item.cantidad, 0, 0
        ]);
        }

        const [results] = await pool.promise().query('CALL spGestionCarrito(?, ?, ?, ?, ?, ?)', ['BO2', 0, userID, 0, 0, 0]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Producto no encontrado o el usuario no coincide' });
        }
       
        res.json({ success: true, message: 'Compra finalizada con éxito' });
    } catch (error) {
        console.error('Error al finalizar la compra:', error);
        res.status(500).json({ success: false, message: 'Error al finalizar la compra' });
    }
};

module.exports = {
login,
registro,
getUser,
putUser,
addUserVentas

};