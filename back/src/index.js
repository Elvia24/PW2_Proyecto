//agregado de la clase, es todo lo que se modifico
const mysql = require('mysql');

const express = require('express');
const app = express();
const cors = require('cors');
//const {Router} = require('express');
//const router = Router();
app.use(cors());
app.use('/',require('./routes/userRoutes'));

//esta instrucción también estaba
//app.use(express.json());

app.listen(3000,()=>{console.log("server on port: 3000")});

//agregado de la clase
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ejemploreact"
});
