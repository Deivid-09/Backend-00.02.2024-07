
//Consultar los datos de GitHub de un usuario especifico.
const axios = require('axios');

class GitHubClient {
  constructor() {
    this.baseUrl = 'https://api.github.com/users';
  }

  async getUser(username) {
    try {
      const response = await axios.get(`${this.baseUrl}/${username}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching GitHub user: ${error.message}`);
    }
  }
}

module.exports = GitHubClient;
//-------------------------------------------------------------------------------------------------------------------//
//Consultar el Clima de una ciudad o ubicacion especifica    

var http = require('http');
var url = require('url');
const axios = require('axios');


http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)
    
    let strURL = req.url;
    if(strURL.includes("info")){


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://randomuser.me/api/',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            res.write(JSON.stringify(response.data));
            res.end();
          })
          .catch((error) => {
            console.log(error);
          });
          

       
    }
    else if(strURL.includes("clima")){
        var q = url.parse(req.url, true).query;
        console.log(q.cuidad);


        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + q.cuidad,
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
              'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              res.write(JSON.stringify(response.data));
              res.end();
          } catch (error) {
              console.error(error);
          }


       
    }
    else{
        res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        res.end();
    }



}).listen(8900);
//-------------------------------------------------------------------------------------------------------------------//
//Consultar el tipo de cambio del dolar en Peru       
//-------------------------------------------------------------------------------------------------------------------//
const axios = require('axios');

class ExchangeRateClient {
  constructor() {
    this.baseUrl = 'https://api.frankfurter.app/latest';
  }

  async getExchangeRate() {
    try {
      const response = await axios.get(`${this.baseUrl}?base=USD&symbols=PEN`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching exchange rate: ${error.message}`);
    }
  }
}

module.exports = ExchangeRateClient;


//-------------------------------------------------------------------------------------------------------------------//
//Consultar la lista de Pokemones actual    

// PokemonClient.js
const axios = require('axios');

class PokemonClient {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getPokemonList(limit = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}?limit=${limit}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon list: ${error.message}`);
    }
  }
}

module.exports = PokemonClient;




//-------------------------------------------------------------------------------------------------------------------//    
            
//Consultar los poderes de un pokemon especifico     
// PokemonClient.js
const axios = require('axios');

class PokemonClient {
  constructor() {
    this.baseUrl = 'https://pokeapi.co/api/v2';
  }

  async getPokemonList(limit = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon`, {
        params: {
          limit: limit
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon list: ${error.message}`);
    }
  }

  async getPokemonByName(name) {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon/${name}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Pokémon: ${error.message}`);
    }
  }
}

module.exports = PokemonClient;

//-------------------------------------------------------------------------------------------------------------------//        
//Consultar los principales personajes de Rick and Morty    

// RickAndMortyClient.js
const axios = require('axios');

class RickAndMortyClient {
  constructor() {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
  }

  async getCharacters(page = 1) {
    try {
      const response = await axios.get(`${this.baseUrl}?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Rick and Morty characters: ${error.message}`);
    }
  }
}

module.exports = RickAndMortyClient;

//-------------------------------------------------------------------------------------------------------------------// 
//Consultar el detalle de cada personaje de Rick and Morty   
// RickAndMortyClient.js
const axios = require('axios');

class RickAndMortyClient {
  constructor() {
    this.baseUrl = 'https://rickandmortyapi.com/api/character';
  }

  async getCharacters(page = 1) {
    try {
      const response = await axios.get(`${this.baseUrl}?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Rick and Morty characters: ${error.message}`);
    }
  }

  async getCharacterById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Rick and Morty character by ID: ${error.message}`);
    }
  }
}

module.exports = RickAndMortyClient;

//-------------------------------------------------------------------------------------------------------------------//
//Consultar el top 10 de bebidas y cocteles     

// CocktailClient.js
const axios = require('axios');

class CocktailClient {
  constructor() {
    this.baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
  }

  async getTopCocktails() {
    try {
      // Obtenemos una lista de las primeras 10 bebidas
      const response = await axios.get(`${this.baseUrl}/search.php?s=`);
      return response.data.drinks.slice(0, 10); // Limitamos a las primeras 10 bebidas
    } catch (error) {
      throw new Error(`Error fetching cocktails: ${error.message}`);
    }
  }
}

module.exports = CocktailClient;

//-------------------------------------------------------------------------------------------------------------------//             
//Consultar un listado de productos de una tienda 

// StoreClient.js
const axios = require('axios');

class StoreClient {
  constructor() {
    this.baseUrl = 'https://fakestoreapi.com/products';
  }

  async getProducts() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }
}

module.exports = StoreClient;

//-------------------------------------------------------------------------------------------------------------------//           
//Consultar y traer Fotografias con un determinado tema y tamaño  

// UnsplashClient.js
const axios = require('axios');

class UnsplashClient {
  constructor() {
    this.baseUrl = 'https://api.unsplash.com/search/photos';
    this.apiKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Reemplaza con tu clave de acceso Unsplash
  }

  async searchPhotos(query, perPage = 10) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          query: query,
          per_page: perPage
        },
        headers: {
          Authorization: `Client-ID ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching photos: ${error.message}`);
    }
  }
}

module.exports = UnsplashClient;

//-------------------------------------------------------------------------------------------------------------------//
// Consultar citas famosas    
// QuotesClient.js
const axios = require('axios');

class QuotesClient {
  constructor() {
    this.baseUrl = 'https://quotes.rest/qod'; // Endpoint para obtener citas
  }

  async getQuotes(category = 'inspire') {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          category: category // Categoría de citas: 'inspire', 'life', 'love', 'art', 'students', 'friendship', 'funny', 'sports', 'music'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching quotes: ${error.message}`);
    }
  }
}

module.exports = QuotesClient;

//-------------------------------------------------------------------------------------------------------------------//
// Consultar datos ficticios de un usuario  

// RandomUserClient.js
const axios = require('axios');

class RandomUserClient {
  constructor() {
    this.baseUrl = 'https://randomuser.me/api/';
  }

  async getUser() {
    try {
      const response = await axios.get(this.baseUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching random user: ${error.message}`);
    }
  }
}

module.exports = RandomUserClient;

//-------------------------------------------------------------------------------------------------------------------//
// Consultar el top de peliculas de estreno   

// TmdbClient.js
const axios = require('axios');

class TmdbClient {
  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.apiKey = 'YOUR_TMDB_API_KEY'; // Reemplaza con tu clave de API de TMDb
  }

  async getTopMovies() {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/now_playing`, {
        params: {
          api_key: this.apiKey,
          language: 'en-US',
          page: 1 // Puedes ajustar la página si necesitas más resultados
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching top movies: ${error.message}`);
    }
  }
}

module.exports = TmdbClient;

//-------------------------------------------------------------------------------------------------------------------//
// Consultar el detalle de una pelicula especifica

// TmdbClient.js
const axios = require('axios');

class TmdbClient {
  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.apiKey = 'YOUR_TMDB_API_KEY'; // Reemplaza con tu clave de API de TMDb
  }

  async getTopMovies() {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/now_playing`, {
        params: {
          api_key: this.apiKey,
          language: 'en-US',
          page: 1
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching top movies: ${error.message}`);
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/${movieId}`, {
        params: {
          api_key: this.apiKey,
          language: 'en-US'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching movie details: ${error.message}`);
    }
  }
}

module.exports = TmdbClient;

//-------------------------------------------------------------------------------------------------------------------//
// Consultar datos especificos de Marte

// NasaClient.js
const axios = require('axios');

class NasaClient {
  constructor() {
    this.baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
    this.apiKey = 'YOUR_NASA_API_KEY'; // Reemplaza con tu clave de API de la NASA
  }

  async getMarsPhotos(rover = 'curiosity', sol = 1000) {
    try {
      const response = await axios.get(`${this.baseUrl}/${rover}/photos`, {
        params: {
          sol: sol, // Sol es el día en Marte
          api_key: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Mars photos: ${error.message}`);
    }
  }

  async getMarsWeather() {
    try {
      const response = await axios.get('https://api.nasa.gov/insight_weather/', {
        params: {
          api_key: this.apiKey,
          feedtype: 'json',
          ver: '1.0'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching Mars weather: ${error.message}`);
    }
  }
}

module.exports = NasaClient;

//-------------------------------------------------------------------------------------------------------------------//
































var http = require('http');
var url = require('url');
const axios = require('axios');


http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)
    
    let strURL = req.url;
    if(strURL.includes("info")){


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://randomuser.me/api/',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            res.write(JSON.stringify(response.data));
            res.end();
          })
          .catch((error) => {
            console.log(error);
          });
          

       
    }
    else if(strURL.includes("clima")){
        var q = url.parse(req.url, true).query;
        console.log(q.cuidad);


        const options = {
            method: 'GET',
            url: 'https://the-weather-api.p.rapidapi.com/api/weather/' + q.cuidad,
            headers: {
              'x-rapidapi-key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
              'x-rapidapi-host': 'the-weather-api.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              res.write(JSON.stringify(response.data));
              res.end();
          } catch (error) {
              console.error(error);
          }


       
    }
    else{
        res.write(JSON.stringify({mensaje:"Cualquier Cosa"}));
        res.end();
    }


}).listen(8900);