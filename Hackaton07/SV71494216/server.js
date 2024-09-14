// server.js
const express = require('express');
const GitHubClient = require('./GitHubClient');
const ExchangeRateClient = require('./ExchangeRateClient');
const PokemonClient = require('./PokemonClient');
const RickAndMortyClient = require('./RickAndMortyClient');
const CocktailClient = require('./CocktailClient');
const StoreClient = require('./StoreClient');
const UnsplashClient = require('./UnsplashClient');
const QuotesClient = require('./QuotesClient');
const RandomUserClient = require('./RandomUserClient');
const TmdbClient = require('./TmdbClient');
const NasaClient = require('./NasaClient');

const app = express();
const port = 3000;
const githubClient = new GitHubClient();
const exchangeRateClient = new ExchangeRateClient();
const pokemonClient = new PokemonClient();
const rickAndMortyClient = new RickAndMortyClient();
const cocktailClient = new CocktailClient();
const storeClient = new StoreClient();
const unsplashClient = new UnsplashClient();
const quotesClient = new QuotesClient();
const randomUserClient = new RandomUserClient();
const tmdbClient = new TmdbClient();
const nasaClient = new NasaClient();

// Ruta para consultar los datos de un usuario de GitHub
app.get('/github/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const userData = await githubClient.getUser(username);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el tipo de cambio del dólar en Perú
app.get('/exchange-rate', async (req, res) => {
  try {
    const exchangeRateData = await exchangeRateClient.getExchangeRate();
    res.json(exchangeRateData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar la lista de Pokémon
app.get('/pokemon', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  try {
    const pokemonData = await pokemonClient.getPokemonList(limit);
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar información de un Pokémon específico
app.get('/pokemon/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const pokemonData = await pokemonClient.getPokemonByName(name);
    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar los personajes de Rick and Morty
app.get('/rick-and-morty', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  try {
    const charactersData = await rickAndMortyClient.getCharacters(page);
    res.json(charactersData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el detalle de un personaje específico de Rick and Morty
app.get('/rick-and-morty/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const characterData = await rickAndMortyClient.getCharacterById(id);
    res.json(characterData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el top 10 de bebidas y cócteles
app.get('/cocktails', async (req, res) => {
  try {
    const cocktailsData = await cocktailClient.getTopCocktails();
    res.json(cocktailsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el listado de productos de la tienda
app.get('/products', async (req, res) => {
  try {
    const productsData = await storeClient.getProducts();
    res.json(productsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para buscar fotografías en Unsplash
app.get('/photos', async (req, res) => {
  const { query, perPage } = req.query;
  try {
    const photosData = await unsplashClient.searchPhotos(query, parseInt(perPage) || 10);
    res.json(photosData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar citas famosas
app.get('/quotes', async (req, res) => {
  const category = req.query.category || 'inspire';
  try {
    const quotesData = await quotesClient.getQuotes(category);
    res.json(quotesData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar datos ficticios de un usuario
app.get('/random-user', async (req, res) => {
  try {
    const userData = await randomUserClient.getUser();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el top de películas de estreno
app.get('/top-movies', async (req, res) => {
  try {
    const moviesData = await tmdbClient.getTopMovies();
    res.json(moviesData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el detalle de una película específica
app.get('/movie/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const movieData = await tmdbClient.getMovieDetails(id);
    res.json(movieData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar fotos de Marte
app.get('/mars-photos', async (req, res) => {
  const rover = req.query.rover || 'curiosity';
  const sol = parseInt(req.query.sol) || 1000;
  try {
    const photosData = await nasaClient.getMarsPhotos(rover, sol);
    res.json(photosData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para consultar el clima en Marte
app.get('/mars-weather', async (req, res) => {
  try {
    const weatherData = await nasaClient.getMarsWeather();
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
