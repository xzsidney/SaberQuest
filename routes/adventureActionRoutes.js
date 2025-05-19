const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const adventureActionController = require('../controllers/adventureActionController');

// Rotas para AdventureAction
router.get('/adventure-actions', isAdmin, adventureActionController.list);
router.get('/adventure-actions/create', isAdmin, adventureActionController.createForm);
router.post('/adventure-actions/create', isAdmin, adventureActionController.create);
router.get('/adventure-actions/:id', isAdmin, adventureActionController.view);
router.get('/adventure-actions/:id/edit', isAdmin, adventureActionController.editForm);
router.post('/adventure-actions/:id/edit', isAdmin, adventureActionController.update);
router.post('/adventure-actions/:id/delete', isAdmin, adventureActionController.delete);

module.exports = router;
