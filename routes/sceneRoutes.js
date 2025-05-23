const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const sceneController = require('../controllers/sceneController');

// Listar todas as cenas
router.get('/scene', isAdmin, sceneController.index);

// Formulário de nova cena
router.get('/scene/new',isAdmin,  sceneController.new);

// Criar nova cena
router.post('/scene', isAdmin, sceneController.create);

// Visualizar uma cena
router.get('/scene/:id', isAdmin, sceneController.show);

// Formulário de edição
router.get('/scene/:id/edit', isAdmin, sceneController.edit);

// Atualizar cena
router.post('/scene/:id', isAdmin, sceneController.update);

// Deletar cena
router.post('/scene/:id/delete', isAdmin, sceneController.destroy);

module.exports = router;
