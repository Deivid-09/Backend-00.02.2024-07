const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/storeController');

// Ruta para consultar el listado de productos
router.get('/products', getProducts);

module.exports = router;
