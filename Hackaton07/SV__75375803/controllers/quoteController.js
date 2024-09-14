const axios = require('axios');

const getFamousQuote = async (req, res) => {
  const apiUrl = `https://favqs.com/api/qotd`;

  try {
    const response = await axios.get(apiUrl);
    const quote = response.data.quote;

    res.json({
      quote: quote.body,
      author: quote.author,
    });
  } catch (error) {
    console.error('Error al obtener la cita famosa:', error.message);
    res.status(500).json({ error: 'Error al obtener la cita famosa' });
  }
};

module.exports = { getFamousQuote };
