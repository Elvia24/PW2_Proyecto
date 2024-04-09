const mysql = require('mysql2');
require('dotenv').config();

/* const pool = mysql.createPool({
  connectionLimit: 10, 
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}); */

const pool = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0, 
    host: 'localhost',  //ip de la bd donde presentaremos
    user: 'root', //usuario de la bd donde presentaremos
    password: 'BDMserver8.', //contra de la bd donde presentaremos
    database: 'web2' //nombre de la bd donde presentaremos
  });


pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) throw error;
  console.log('La solución es: ', results[0].solution);
});



module.exports = pool;