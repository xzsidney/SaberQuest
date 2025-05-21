const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const gameController = require('../controllers/gameController');

router.get('/playAdventure', isAuthenticated, gameController.showPlayScreen);
router.get('/playAdventure/:actionsId', gameController.getNextActions);
router.get('/playAdventure/type/:actionsId', gameController.getAction);
 


module.exports = router;
