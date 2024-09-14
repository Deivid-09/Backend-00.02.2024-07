const express = require('express');
const axios = require('axios');
const app = express();
const port = 8005;
 
const urlList = [
  "http://localhost:8005/github/joaquiiin08",
  "http://localhost:8005/clima/?ciudad=Paris",
  "http://localhost:8005/tipo-de-cambio", 
  "http://localhost:8005/pokemon/latest",  
  "http://localhost:8005/pokemon/squawkabilly", 
  "http://localhost:8005/rickandmorty", 
  "http://localhost:8005/rickandmortydet/?name=Summer+Smith", 
  "http://localhost:8005/topbebidas", 
  "http://localhost:8005/productos/lista",
  "http://localhost:8005/fotos", 
  "http://localhost:8005/citasfamosas", 
  "http://localhost:8005/usuarioficticio/random", 
  "http://localhost:8005/top-peliculas", 
  "http://localhost:8005/detalle-peliculas?name=Gunner", 
  "http://localhost:8005/marte/clima"
];

app.get('/', (req, res) => {
  let message = "HACKATON 07 - SV46429488 <br><br>";
  message += "Lista de URLs disponibles:<br>";
  urlList.forEach(url => {
      message += `<li><a href="${url}">${url}</a></li>`;
  });
  res.type('text/html');
  res.send(message);
});

//1.Consultar los datos de GitHub de un usuario especifico.   
//http://localhost:8005/github/joaquiiin08
app.get('/github/:username', async (req, res) => {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await axios.get(url);
        const githubData = response.data;
        res.json(githubData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching GitHub data');
    }

});

//2.Consultar el Clima de una ciudad o ubicacion especifica  
//http://localhost:8005/clima/?ciudad=Paris
const RAPIDAPI_KEY = '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186';
const RAPIDAPI_HOST = 'the-weather-api.p.rapidapi.com';

app.get('/clima', async (req, res) => {
    const ciudad = req.query.ciudad;
    const zipcode = req.query.zipcode;
    if (!ciudad && !zipcode) {
        return res.status(400).json({ error: 'Por favor ingrese la ciudad o zipcode' });
    }
    let url;
    if (ciudad) {
        url = `https://the-weather-api.p.rapidapi.com/api/weather/${ciudad}`;
    } else {
        url = `https://the-weather-api.p.rapidapi.com/api/weather/zip=${zipcode}`;
    }
    const options = {
        method: 'GET',
        url: url,
        headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST
        }
    };
    try {
        const response = await axios.request(options);
        weatherData= response.data;
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching data clima:', error.message);
        res.status(500).json({ error: 'Ocurrio un error fetching clima data' });
    }
});

//3.Consultar el tipo de cambio del dolar en Peru 
//http://localhost:8005/tipo-de-cambio
app.get('/tipo-de-cambio', async (req, res) => {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';
    try {
        const response = await axios.get(url);
        const exchangeRate = response.data.rates.PEN;  
        res.json(exchangeRate);
    } catch (error) {
        console.error('Error al consultar el tipo de cambio', error.message);
        res.status(500).send('Error fetching exchange rate');
    }
});

//4.Consultar  la lista de Pokemones actual 
//http://localhost:8005/pokemon/latest 
app.get('/pokemon/latest', async (req, res) => {
    try {
        // Obtener la lista de generaciones disponibles
        const generationsResponse = await axios.get('https://pokeapi.co/api/v2/generation/');
        const generations = generationsResponse.data.results;
        const latestGenerationUrl = generations[generations.length - 1].url;
        const generationResponse = await axios.get(latestGenerationUrl);
        const generationData = generationResponse.data;
        const pokemonList = generationData.pokemon_species.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }));
          res.json(pokemonList);
    } catch (error) { 
        console.error(error);
        res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
});

//5.Consultar los poderes de un pokemon especifico  
//http://localhost:8005/pokemon/squawkabilly
app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; 

    try {
        const response = await axios.get(url);
        const pokemonData = response.data;
        const moves = pokemonData.moves.map(move => move.move.name);
        const responseData = {
            name: pokemonData.name,
            moves: moves
        };
        res.json(responseData); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching Pokémon data' });
    }
});
 
//6.Consultar los principales personajes de Rick and Morty  
//http://localhost:8005/rickandmorty
app.get('/rickandmorty', async (req, res) => {
    const url = `https://rickandmortyapi.com/api/character`;
    try {
        const response = await axios.get(url);
        const characters= response.data;
        const charactersList = characters.results.map(character => ({
          id: character.id,
          name: character.name
      }));
         const mainCharacters = charactersList.filter(character => character.id <= 5);
         res.json(mainCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching Rick and Morty data');
    }
});

//7.Consultar el detalle de cada personaje de Rick and Morty  
//http://localhost:8005/rickandmortydet/?name=Summer+Smith
app.get('/rickandmortydet', async (req, res) => {
    const name = req.query.name; 
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`; 
    try {
        const response = await axios.get(url);
        const rickandmortyData = response.data.results;
        if (rickandmortyData.length > 0) {
            const character = rickandmortyData[0];
            res.json(character);
        } else {
            res.status(404).send('Personaje no encontrado');
        }
    } catch (error) {
        console.error('Error fetching Rick and Morty data:', error);
        res.status(500).send('Error fetching Rick and Morty data');
    }
});

//8.Consultar el top 10 de bebidas y cocteles  
//http://localhost:8005/topbebidas
app.get('/topbebidas', async (req, res) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; 
    try {
        const response = await axios.get(url);
        const drinks = response.data.drinks.slice(0, 10); 
        const popularDrinks = drinks.map(drink => {
            const ingredients = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
                }
            }
            return {
                name: drink.strDrink,
                id: drink.idDrink,
                ingredients: ingredients,
                instructions: drink.strInstructions,
                image: drink.strDrinkThumb 
            };
        });
        res.json(popularDrinks);
    } catch (error) {
        console.error('Error al consultar los cócteles y bebidas:', error.message);
        res.status(500).send('Error fetching drinks data');
    }
});

//9.Consultar un listado de productos de una tienda  
//http://localhost:8005/productos/lista
app.get('/productos/lista',async(req,res)=>{
    const url='https://fakestoreapi.com/products';
    try{
        const response= await axios.get(url);
        const listproducts = response.data;
         res.json(listproducts); 
    }catch (error) {
        console.error('Error al consultar los productos',error.message);
        res.status(500).send('Error fetching products data');
    }
});

//10.Consultar y traer Fotografias con un determinado tema y tamaño  
//http://localhost:8005/fotos
const accessKey = 'xhT4p9cuSTlC9DYMXLHX6FOzpjBADuessMPfYuGN4xM';

app.get('/fotos', async (req, res) => {
    const theme = req.query.theme; 
    const size = req.query.size; 
    const page = req.query.page || 1; 
    const perPage = req.query.per_page || 10; 
    let url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${theme}&page=${page}&per_page=${perPage}`;
    try {
        const response = await axios.get(url);
        const photos = response.data.results.map(photo => {
            let selectedUrl = photo.urls.regular;  
            if (size && photo.urls[size]) {
                selectedUrl = photo.urls[size];
            }
            return {
                id: photo.id,
                description: photo.description,
                url: selectedUrl,
                dimensions: {
                    width: photo.width,
                    height: photo.height
                }
            };
        });
        res.json(photos); 
    } catch (error) {
        console.error('Error al consultar fotos de Unsplash', error.message);
        res.status(500).send('Error fetching photos from Unsplash');
    }
});

//11.Consultar citas famosas  
//http://localhost:8005/citasfamosas
const API_TOKEN = 'MtdCjyz2wAuc53UPRQTConZaFeEaqWQDf5vfiWCW';

app.get('/citasfamosas', async (req, res) => {
    const url = 'http://quotes.rest/qod?language=en';
    try {
        const response = await axios.get(url, {
            headers: {
                'X-TheySaidSo-Api-Secret': API_TOKEN
            }
        });
        const quotesArray = response.data.contents.quotes.map(quoteData => ({
            author: quoteData.author,
            quote: quoteData.quote
        }));
        res.json(quotesArray); 
    } catch (error) {
        console.error('Error fetching quotes:', error.message);
        res.status(500).json({ error: 'Error fetching quotes' });
    }
});

//12.Consultar datos ficticios de un usuario  
//http://localhost:8005/usuarioficticio/random
app.get('/usuarioficticio/random', async (req, res) => {
    const url = 'https://randomuser.me/api/';
    try {
        const response = await axios.get(url);
        const userData = response.data.results[0];
        res.json(userData); 
    } catch (error) {
        console.error('Error al consultar los datos del usuario', error.message);
        res.status(500).send('Error fetching user data');
    }
});

//13.Consultar el top de peliculas de estreno  
//http://localhost:8005/top-peliculas
const apiKey = '670a479ed4aee92eef68fa0718fe209f'; 

app.get('/top-peliculas', async (req, res) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    try {
        const response = await axios.get(url);
        const currentDate = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);  
        const movies = response.data.results
            .filter(movie => {
                const releaseDate = new Date(movie.release_date);
                return releaseDate >= oneMonthAgo && releaseDate <= currentDate;
            })
            .map(movie => ({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                vote_average: movie.vote_average
            }));
        res.json(movies); 
    } catch (error) {
        console.error('Error al consultar el top de películas de estreno de TMDb', error.message);
        res.status(500).send('Error fetching top released movies from TMDb');
    }
});

//14.Consultar el detalle de una pelicula especifica
//http://localhost:8005/detalle-peliculas?name=Gunner
app.get('/detalle-peliculas', async (req, res) => {
    const movieName = req.query.name; 

    if (!movieName) {
        return res.status(400).send('El nombre de la película es requerido');
    }
    try { 
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
        const searchResponse = await axios.get(searchUrl);
        if (searchResponse.data.results.length === 0) {
            return res.status(404).send('Película no encontrada');
        }
        const movieId = searchResponse.data.results[0].id;
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        const detailsResponse = await axios.get(detailsUrl);
        const movie = detailsResponse.data;
        res.json(movie);
    } catch (error) {
        console.error('Error al consultar los detalles de la película', error.message);
        res.status(500).send('Error fetching movie details from TMDb');
    }
});

//15.Consultar datos especificos de Marte
//http://localhost:8005/marte/clima
const NASA_API_KEY = 'kGuQ2a80Sp2PZBvwOQptPsKyHtqzrL9Y1nBDPF5j';

app.get('/marte/clima', async (req, res) => {
    const url = `https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`;
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching clima Marte data:', error.message);
        res.status(500).send('Error fetching clima Marte data');
    }
});


app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});