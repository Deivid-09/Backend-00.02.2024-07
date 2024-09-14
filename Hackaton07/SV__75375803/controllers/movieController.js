const axios = require('axios');

const getTopMovies = async (req, res) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

  try {
    const response = await axios.get(apiUrl);
    const movies = response.data.results.map(movie => ({
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    }));
    
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener el top de películas de estreno:', error.message);
    res.status(500).json({ error: 'Error al obtener el top de películas de estreno' });
  }
};

module.exports = { getTopMovies };
