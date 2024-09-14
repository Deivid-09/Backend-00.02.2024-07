const express = require('express');
const router = express.Router();
const { getFamousQuote } = require('../controllers/quoteController');

// Ruta para consultar citas famosas
router.get('/famous', getFamousQuote);

module.exports = router;
