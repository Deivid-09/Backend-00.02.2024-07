const express = require('express');
const router = express.Router();
const { getMarsMissionData } = require('../controllers/marsMissionController');

// Ruta para consultar datos sobre misiones espaciales (incluyendo Marte)
router.get('/mission', getMarsMissionData);

module.exports = router;
