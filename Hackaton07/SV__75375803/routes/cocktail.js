const express = require('express');
const router = express.Router();
const { getTopCocktails } = require('../controllers/cocktailController');

// Ruta para consultar el top 10 de bebidas y cócteles
router.get('/top10', getTopCocktails);

module.exports = router;
