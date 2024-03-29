require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000
const userRoutes = require('./routes/users_routes.js');
const pool = require('./config/db');


// Middleware
app.use(cors({
    origin: '*',
    methods: "GET, POST, PUT, DELETE, OPTIONS"
  }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/auth', userRoutes);

  
  
  pool.query('SELECT NOW()', (error, results) => {
    if (error) {
      return console.error('Error al realizar la consulta', error);
    }
    console.log('Conexión a la base de datos exitosa. Hora actual del servidor:', results[0]['NOW()']);
  });

  
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });



  