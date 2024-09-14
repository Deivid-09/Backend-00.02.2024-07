const express = require('express');
const router = express.Router();
const { getExchangeRate } = require('../controllers/exchangeRateController');

// Ruta para consultar el tipo de cambio del dólar a sol peruano
router.get('/', getExchangeRate);

module.exports = router;
