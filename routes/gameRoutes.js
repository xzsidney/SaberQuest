const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');
const gameController = require('../controllers/gameController');

router.get('/playX', isAuthenticated, gameController.showPlayScreen);

module.exports = router;
