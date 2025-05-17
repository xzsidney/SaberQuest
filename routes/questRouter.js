const express = require('express');
const router = express.Router();
const questController = require("../controllers/questController");

// Rota para iniciar a quest
router.get("/quest", questController.inicio);

// Rota para avançar para o próximo passo da quest
router.post('/quest', questController.proximo);

 
router.get("/quest/:id", questController.actionQuest);
router.get("/quest/teste/:id", questController.teste);


module.exports = router;
