const express = require('express');
const router = express.Router();
const { getPokemonMoves } = require('../controllers/pokemonMovesController');

// Ruta para consultar los movimientos de un Pokémon específico
router.get('/:name/moves', getPokemonMoves);

module.exports = router;
