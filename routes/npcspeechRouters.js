const express = require("express");
const router = express.Router();
const npcSpeechController = require("../controllers/npcSpeechController"); 
// Lista todas as falas dos NPCs
router.get("/npc-speeches", npcSpeechController.indexPage);

// Formulário de criação de fala
router.get("/npc-speeches/new", npcSpeechController.newPage);

// Cria nova fala
router.post("/npc-speeches", npcSpeechController.create);

// Detalhes da fala
router.get("/npc-speeches/:id", npcSpeechController.showPage);

// Formulário de edição da fala
router.get("/npc-speeches/:id/edit", npcSpeechController.editPage);

// Atualiza fala
router.put("/npc-speeches/:id", npcSpeechController.update);

// Deleta fala
router.delete("/npc-speeches/:id/delete", npcSpeechController.delete);

module.exports = router;
