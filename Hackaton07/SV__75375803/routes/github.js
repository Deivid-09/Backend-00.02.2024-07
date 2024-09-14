const express = require('express');
const router = express.Router();
const { getGithubUser } = require('../controllers/githubController');

// Ruta para consultar datos de GitHub
router.get('/:username', getGithubUser);

module.exports = router;
