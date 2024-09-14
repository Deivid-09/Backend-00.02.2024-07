const express = require('express');
const router = express.Router();
const { getRandomUser } = require('../controllers/randomUserController');

// Ruta para consultar datos ficticios de un usuario
router.get('/user', getRandomUser);

module.exports = router;
