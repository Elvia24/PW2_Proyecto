require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authenticateToken = require('./middlewares/auth');

const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000
const fs = require('fs');
const userRoutes = require('./routes/users_routes.js');
const productoRoutes = require('./routes/product_routes.js');
const categoriaRoutes = require('./routes/category_routes.js');

const pool = require('./config/db');


// Middleware


app.use(cors({
    origin: '*',
    methods: "GET, POST, PUT, DELETE, OPTIONS"
  }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/productos', authenticateToken, productoRoutes);
app.use('/categorias', authenticateToken, categoriaRoutes);
app.use('/uploads', express.static('src/uploads'));




  
  pool.query('SELECT NOW()', (error, results) => {
    if (error) {
      return console.error('Error al realizar la consulta', error);
    }
    console.log('Conexión a la base de datos exitosa. Hora actual del servidor:', results[0]['NOW()']);
  });

  
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });



  