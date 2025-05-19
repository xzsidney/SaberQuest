const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');
const actionResultController = require('../controllers/actionResultController');

// Rotas para ActionResult
router.get('/action-results', isAdmin, actionResultController.list);
router.get('/action-results/create', isAdmin, actionResultController.createForm);
router.post('/action-results/create', isAdmin, actionResultController.create);
router.get('/action-results/:id', isAdmin, actionResultController.view);
router.get('/action-results/:id/edit', isAdmin, actionResultController.editForm);
router.post('/action-results/:id/edit', isAdmin, actionResultController.update);
router.post('/action-results/:id/delete', isAdmin, actionResultController.delete);

module.exports = router;
