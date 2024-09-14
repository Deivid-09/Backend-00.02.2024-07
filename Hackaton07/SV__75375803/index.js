const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Ruta de ejemplo para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.json({ message: 'Nuevo servidor está corriendo' });
});

// Importar y usar la ruta de GitHub
const githubRoute = require('./routes/github');
app.use('/github', githubRoute);

// Importar y usar la ruta de Clima
const weatherRoute = require('./routes/weather');
app.use('/clima', weatherRoute);

// Importar y usar la ruta del Tipo de Cambio del Dólar
const exchangeRateRoute = require('./routes/exchangeRate');
app.use('/exchange-rate', exchangeRateRoute);

// Importar y usar la ruta de la lista de Pokémones
const pokemonRoute = require('./routes/pokemon');
app.use('/pokemon', pokemonRoute);

// Importar y usar la ruta de los movimientos de un Pokémon
const pokemonMovesRoute = require('./routes/pokemonMoves');
app.use('/pokemon', pokemonMovesRoute);

// Importar y usar la ruta de Rick and Morty
const rickAndMortyRoute = require('./routes/rickAndMorty');
app.use('/rickandmorty', rickAndMortyRoute);

// Importar y usar la ruta de los detalles de un personaje de Rick and Morty
const rickAndMortyDetailsRoute = require('./routes/rickAndMortyDetails');
app.use('/rickandmorty', rickAndMortyDetailsRoute);

// Importar y usar la ruta de bebidas y cócteles
const cocktailRoute = require('./routes/cocktail');
app.use('/cocktails', cocktailRoute);

// Importar y usar la ruta de productos de la tienda
const storeRoute = require('./routes/store');
app.use('/store', storeRoute);

// Importar y usar la ruta de fotografías de Pexels
const pexelsRoute = require('./routes/pexels');
app.use('/pexels', pexelsRoute);

// Importar y usar la ruta de citas famosas
const quoteRoute = require('./routes/quote');
app.use('/quotes', quoteRoute);

// Importar y usar la ruta de usuario ficticio
const randomUserRoute = require('./routes/randomUser');
app.use('/randomuser', randomUserRoute);

// Importar y usar la ruta de películas
const movieRoute = require('./routes/movie');
app.use('/movies', movieRoute);

// Importar y usar la ruta de detalles de una película
const movieDetailRoute = require('./routes/movieDetail');
app.use('/movie', movieDetailRoute);

// Importar y usar la ruta de datos de misiones espaciales
const marsMissionRoute = require('./routes/marsMission');
app.use('/mars', marsMissionRoute);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
