const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherController');

// Ruta para consultar el clima
router.get('/', getWeather);

module.exports = router;
