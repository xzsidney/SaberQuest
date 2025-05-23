// routes/play.js
const express = require('express');
const router = express.Router();
const { isAdmin , isAuthenticated } = require('../middlewares/authMiddleware');
const gameController = require('../controllers/gameController');


router.get('/play/:id', isAuthenticated, gameController.showPlayScreen);
router.get('/nextPlayScreen/:id', isAuthenticated, gameController.nextPlayScreen);


 

module.exports = router;
