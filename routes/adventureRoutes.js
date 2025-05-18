// Routes for Adventure
const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authMiddleware');

const adventureController = require('../controllers/adventureController'); 

// ROTAS DE AVENTURAS
router.get('/adventures', isAdmin, adventureController.listAdventures);
router.get('/adventures/create', isAdmin, adventureController.createForm);
router.post('/adventures/create', isAdmin, adventureController.createAdventure);
router.get('/adventures/:id', isAdmin, adventureController.viewAdventure);
router.get('/adventures/:id/edit', isAdmin, adventureController.editForm);
router.post('/adventures/:id/edit', isAdmin, adventureController.updateAdventure);
router.post('/adventures/:id/delete', isAdmin, adventureController.deleteAdventure);


module.exports = router;
