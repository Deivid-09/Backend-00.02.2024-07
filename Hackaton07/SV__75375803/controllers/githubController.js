const axios = require('axios');

const getGithubUser = async (req, res) => {
  const username = req.params.username;
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de GitHub' });
  }
};

module.exports = { getGithubUser };
