const axios = require('axios');

const getTopCocktails = async (req, res) => {
  const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

  try {
    const response = await axios.get(apiUrl);
    const drinks = response.data.drinks.slice(0, 10); // Obtener solo los primeros 10 resultados
    res.json(drinks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el top 10 de bebidas y cócteles' });
  }
};

module.exports = { getTopCocktails };
