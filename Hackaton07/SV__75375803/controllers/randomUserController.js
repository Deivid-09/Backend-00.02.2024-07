const axios = require('axios');

const getRandomUser = async (req, res) => {
  const apiUrl = `https://randomuser.me/api/`;

  try {
    const response = await axios.get(apiUrl);
    const userData = response.data.results[0]; // Tomar el primer usuario (único en este caso)

    res.json({
      name: `${userData.name.first} ${userData.name.last}`,
      gender: userData.gender,
      email: userData.email,
      phone: userData.phone,
      location: `${userData.location.city}, ${userData.location.country}`,
      picture: userData.picture.large,
    });
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos del usuario' });
  }
};

module.exports = { getRandomUser };
