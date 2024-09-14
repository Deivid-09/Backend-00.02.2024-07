const axios = require('axios');

const getPexelsPhotos = async (req, res) => {
  const query = req.query.query || 'nature'; // Tema de la foto, por defecto 'nature'
  const per_page = req.query.per_page || 10; // Número de fotos a obtener

  const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });

    const photos = response.data.photos.map(photo => ({
      url: photo.src.original, // Puedes cambiar a 'medium', 'large', etc.
      photographer: photo.photographer,
      photographer_url: photo.photographer_url,
    }));

    res.json(photos);
  } catch (error) {
    console.error('Error al obtener las fotografías de Pexels:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error al obtener las fotografías de Pexels' });
  }
};

module.exports = { getPexelsPhotos };
