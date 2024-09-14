const axios = require('axios');

const getProducts = async (req, res) => {
  const apiUrl = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);  // Devuelve la lista de productos
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el listado de productos' });
  }
};

module.exports = { getProducts };
