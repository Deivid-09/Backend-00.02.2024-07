const express = require('express');
const router = express.Router();
const { getPokemonList } = require('../controllers/pokemonController');

// Ruta para consultar la lista de Pokémones
router.get('/', getPokemonList);

module.exports = router;
