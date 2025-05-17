// routes/homeRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/index', {
    title: 'Bem-vindo ao SaberQuest',
    user: req.session.user || null // <- isso resolve o erro
  });
});

module.exports = router;
