
import React from 'react';
import mysql from 'mysql';
import express from 'express';
const app = express();
import cors from 'cors';
import userRoutes from './routes/userRoutes';

app.use(cors());
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log("Server on port: 3000");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ejemploreact"
});
