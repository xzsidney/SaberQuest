// routes/playerRoutes.js
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Painel principal do jogador
router.get('/player/dashboard', isAuthenticated, playerController.dashboard);

// Ver todos os personagens do jogador logado
router.get('/player/characters',  isAuthenticated, playerController.listCharacters);

// Ver uma aventura
router.get('/player/adventures', isAuthenticated,  playerController.viewAdventures);

// Ver provas disponíveis
router.get('/player/exams', isAuthenticated,  playerController.viewExams);

// Ver mochila (inventário)
router.get('/player/inventory', isAuthenticated, playerController.viewInventory);

// Ver loja router.get('/player/shop', isAuthenticated, playerController.viewShop);
router.get('/player/shop', isAuthenticated, playerController.viewShop);

module.exports = router;

