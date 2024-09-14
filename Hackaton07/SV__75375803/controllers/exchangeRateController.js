const axios = require('axios');

const getExchangeRate = async (req, res) => {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;  // Carga la clave API desde el archivo .env
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  try {
    const response = await axios.get(apiUrl);
    const penRate = response.data.conversion_rates.PEN;  // Obtiene el tipo de cambio de USD a PEN (Soles)
    res.json({ rate: penRate });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tipo de cambio' });
  }
};

module.exports = { getExchangeRate };
