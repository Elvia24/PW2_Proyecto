import express from 'express';
const router = express.Router();

router.get('/usuarios', (request, response) => {
  console.log("llegue a usuarios");
  response.send('usuarios');
});

export default router;
