const express = require('express');
const router = express.Router();
const { getRickAndMortyCharacterDetails } = require('../controllers/rickAndMortyDetailsController');

// Ruta para consultar los detalles de un personaje de Rick and Morty
router.get('/character/:id', getRickAndMortyCharacterDetails);

module.exports = router;
