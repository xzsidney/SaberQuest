
const express = require('express');
const router = express.Router();
const adventuresController = require("../controllers/adventuresController");



// CRUD completo da tabela Adventures (Aventura)
router.get('/adventures', adventuresController.indexPage);                  // Listar todas as aventuras
router.get('/adventures/new', adventuresController.newPage);               // Página para criar uma nova aventura
router.post('/adventures', adventuresController.create);                   // Criar uma nova aventura
router.get('/adventures/:id', adventuresController.showPage);              // Detalhes de uma aventura específica
router.get('/adventures/:id/edit', adventuresController.editPage);         // Página para editar uma aventura
router.put('/adventures/:id', adventuresController.update);                // Atualizar os detalhes de uma aventura
router.delete('/adventures/:id/delete', adventuresController.delete);      // Deletar uma aventura

// Rota para iniciar a aventura
router.post('/adventures/:id/start', adventuresController.startAdventure);

// Rota para marcar a aventura como concluída
router.post('/adventures/:id/complete', adventuresController.completeAdventure);

// Rota para exibir o progresso da aventura
router.get('/adventures/:id/progress', adventuresController.showProgress);

// Rota para desafios específicos da aventura
router.post('/adventures/:id/challenges', adventuresController.challengeProfessor);

// Rota para interagir com o Giz Mágico
router.post('/adventures/:id/magic-chalk', adventuresController.interactWithMagicChalk);
 

module.exports = router;


/* 

http://localhost:3000/adventures
*/