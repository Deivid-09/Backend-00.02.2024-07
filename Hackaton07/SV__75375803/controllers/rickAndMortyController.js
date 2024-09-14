const axios = require('axios');

const getRickAndMortyCharacters = async (req, res) => {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data.results);  // Devuelve la lista de personajes
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los personajes de Rick and Morty' });
  }
};

module.exports = { getRickAndMortyCharacters };
