const axios = require('axios');

const getRickAndMortyCharacterDetails = async (req, res) => {
  const characterId = req.params.id;
  const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);  // Devuelve los detalles del personaje
  } catch (error) {
    res.status(500).json({ error: `Error al obtener detalles del personaje con ID ${characterId}` });
  }
};

module.exports = { getRickAndMortyCharacterDetails };
