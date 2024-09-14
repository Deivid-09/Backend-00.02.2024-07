const express = require('express');
const router = express.Router();
const { getMovieDetail } = require('../controllers/movieDetailController');

// Ruta para consultar el detalle de una película específica
router.get('/:id', getMovieDetail);

module.exports = router;
