const express = require('express');
const router = express.Router();
const { getPexelsPhotos } = require('../controllers/pexelsController');

// Ruta para consultar fotografías con un tema específico desde Pexels
router.get('/photos', getPexelsPhotos);

module.exports = router;
