const { Router } = require('express');
const authCtrl = require('../controllers/users_controllers.js');

const userRoutes = Router();

userRoutes.post('/login', authCtrl.login);
userRoutes.post('/registro', authCtrl.registro);

module.exports = userRoutes;