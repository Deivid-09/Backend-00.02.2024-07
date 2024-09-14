const express = require('express');
const router = express.Router();
const { getTopMovies } = require('../controllers/movieController');

// Ruta para consultar el top de películas de estreno
router.get('/top', getTopMovies);

module.exports = router;
