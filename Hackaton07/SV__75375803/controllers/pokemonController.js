const axios = require('axios');

const getPokemonList = async (req, res) => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=500';

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data.results);  // Devuelve la lista de Pokémones
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de Pokémones' });
  }
};

module.exports = { getPokemonList };
