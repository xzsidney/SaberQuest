const express = require("express");
const router = express.Router();
const adventureActionsController = require("../controllers/adventureActionsController");

// Lista todas as ações
router.get("/actions", adventureActionsController.indexPage);

// Formulário de criação
router.get("/actions/new", adventureActionsController.newPage);

// Cria nova ação
router.post("/actions", adventureActionsController.create);

// Detalhes da ação
router.get("/actions/:id", adventureActionsController.showPage);

// Formulário de edição
router.get("/actions/:id/edit", adventureActionsController.editPage);

// Atualiza ação
router.put("/actions/:id", adventureActionsController.update);

// Deleta ação
router.delete("/actions/:id/delete", adventureActionsController.delete);

// Executa ação (ação extra)
router.get("/actions/:id/execute", adventureActionsController.executeAction);



module.exports = router;
