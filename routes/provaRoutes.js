const express = require('express');
const router = express.Router();

// Rota de login
router.get('/desafio', (req, res) => {
    // Lógica de login
    res.send('Login desafio!');
  });


  router.get('/testes', (req, res) => {
    // Lógica de login
    res.send('o	Matritestecular realizado!');
  });

  module.exports = router;