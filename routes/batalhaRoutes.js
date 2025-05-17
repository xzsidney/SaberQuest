const express = require('express');
const router = express.Router();

// Rota de login
router.get('/missoes', (req, res) => {
    // Lógica de login
    res.send('Login desafio! missoes');
  });


  router.get('/duelos', (req, res) => {
    // Lógica de login
    res.send('o	Duelo foi feitoMatritestecular realizado!');
  });

  module.exports = router;