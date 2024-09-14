const express = require('express');
const router = express.Router();
const { getRickAndMortyCharacters } = require('../controllers/rickAndMortyController');

// Ruta para consultar los personajes de Rick and Morty
router.get('/characters', getRickAndMortyCharacters);

module.exports = router;
