const axios = require('axios');

const getMarsMissionData = async (req, res) => {
  const apiUrl = `http://api.open-notify.org/astros.json`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json({
      message: "Personas en el espacio actualmente",
      people: data.people,
      number: data.number,
    });
  } catch (error) {
    console.error('Error al obtener datos de la misión a Marte:', error.message);
    res.status(500).json({ error: 'Error al obtener datos de la misión a Marte' });
  }
};

module.exports = { getMarsMissionData };
