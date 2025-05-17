const express = require('express');
const router = express.Router();


router.get('/aluno', (req, res) => {
    // Lógica de login
    res.send('Login realizado do aluno!');
  });


  router.get('/professor', (req, res) => {
    // Lógica de login
    res.send('o	Professor  realizado!');
  });
 
module.exports = router;
