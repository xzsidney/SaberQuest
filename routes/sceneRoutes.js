const express = require('express');
const router = express.Router();
const sceneController = require('../controllers/sceneController');

// Listar todas as cenas
router.get('/scene', sceneController.index);

// Formulário de nova cena
router.get('/scene/new', sceneController.new);

// Criar nova cena
router.post('/scene', sceneController.create);

// Visualizar uma cena
router.get('/scene/:id', sceneController.show);

// Formulário de edição
router.get('/scene/:id/edit', sceneController.edit);

// Atualizar cena
router.post('/scene/:id', sceneController.update);

// Deletar cena
router.post('/scene/:id/delete', sceneController.destroy);

module.exports = router;
