const axios = require('axios');

const getMovieDetail = async (req, res) => {
  const movieId = req.params.id;
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;

  try {
    const response = await axios.get(apiUrl);
    const movie = response.data;
    
    res.json({
      title: movie.title,
      release_date: movie.release_date,
      overview: movie.overview,
      genres: movie.genres.map(genre => genre.name).join(', '),
      runtime: movie.runtime,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    });
  } catch (error) {
    console.error('Error al obtener el detalle de la película:', error.message);
    res.status(500).json({ error: 'Error al obtener el detalle de la película' });
  }
};

module.exports = { getMovieDetail };
