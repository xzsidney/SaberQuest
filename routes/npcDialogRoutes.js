const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const npcDialogController = require('../controllers/npcDialogController');

// Rotas para NpcDialog
router.get('/npc-dialogs', isAdmin, npcDialogController.list);
router.get('/npc-dialogs/create', isAdmin, npcDialogController.createForm);
router.post('/npc-dialogs/create', isAdmin, npcDialogController.create);
router.get('/npc-dialogs/:id', isAdmin, npcDialogController.view);
router.get('/npc-dialogs/:id/edit', isAdmin, npcDialogController.editForm);
router.post('/npc-dialogs/:id/edit', isAdmin, npcDialogController.update);
router.post('/npc-dialogs/:id/delete', isAdmin, npcDialogController.delete);

module.exports = router;
