const axios = require('axios');

const getPokemonMoves = async (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await axios.get(apiUrl);
    const moves = response.data.moves.map(move => move.move.name);  // Obtener solo los nombres de los movimientos
    res.json({
      pokemon: pokemonName,
      moves: moves
    });
  } catch (error) {
    res.status(500).json({ error: `Error al obtener los movimientos de ${pokemonName}` });
  }
};

module.exports = { getPokemonMoves };
