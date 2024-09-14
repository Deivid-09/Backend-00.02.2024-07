const axios = require('axios');

const getWeather = async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;
  const apiHost = process.env.WEATHER_API_HOST;

  const options = {
    method: 'GET',
    url: `https://${apiHost}/current.json?q=${city}`,
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del clima' });
  }
};

module.exports = { getWeather };
