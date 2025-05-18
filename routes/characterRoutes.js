const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Listar todos os personagens do jogador logado
router.get('/player/characters', isAuthenticated, characterController.listCharacters);

// Formulário de criação
router.get('/characters/create', isAuthenticated, characterController.createPage);
router.post('/characters/create', isAuthenticated, characterController.createCharacter);

// Ver personagem específico
router.get('/characters/:id', isAuthenticated, characterController.viewCharacter);

// Formulário de edição
router.get('/characters/:id/edit', isAuthenticated, characterController.editCharacterPage);
router.post('/characters/:id/edit', isAuthenticated, characterController.updateCharacter);

// Excluir personagem
router.post('/characters/:id/delete', isAuthenticated, characterController.deleteCharacter);

module.exports = router;

