const { Router } = require('express');
const authCtrl = require('../controllers/users_controllers.js');
const authenticateToken = require('../middlewares/auth');
const userRoutes = Router();

userRoutes.post('/login', authCtrl.login);
userRoutes.post('/registro', authCtrl.registro);
userRoutes.get('/usuario', authenticateToken, authCtrl.getUser);
userRoutes.put('/usuario', authenticateToken, authCtrl.putUser);
userRoutes.post('/ventas',authenticateToken ,authCtrl.addUserVentas);

module.exports = userRoutes;