const express = require('express');
const router = express.Router();
const { archetypesController, attributesController , itemsController, skillsController }= require("../controllers/gmController");
const characterAdventureProgressController = require('../controllers/characterAdventureProgressController');


 router.get('/game_master', (req, res) => {
    
    const personagem = {
        nome: 'Herói',
    };
  res.render('game_master/index/index',{ personagem: { nome: 'Mario' }});
});




// attributes
router.get("/archetypes", archetypesController.indexPage);
router.get("/archetypes/new", archetypesController.newPage);
router.post("/archetypes", archetypesController.create);
router.get("/archetypes/:id", archetypesController.showPage);
router.get("/archetypes/:id/edit", archetypesController.editPage);
router.put("/archetypes/:id", archetypesController.update);
router.delete("/archetypes/:id/delete", archetypesController.delete);


// attributes
router.get('/attributes', attributesController.indexPage);
router.get('/attributes/new', attributesController.newPage);
router.post('/attributes', attributesController.create);
router.get('/attributes/:id', attributesController.showPage);
router.get('/attributes/:id/edit', attributesController.editPage);
router.put('/attributes/:id', attributesController.update);
router.delete('/attributes/:id/delete', attributesController.delete);

//items
router.get('/items', itemsController.indexPage);
router.get('/items/new', itemsController.newPage);
router.post('/items', itemsController.create);
router.get('/items/:id', itemsController.showPage);
router.get('/items/:id/edit', itemsController.editPage);
router.put('/items/:id', itemsController.update);
router.delete('/items/:id/delete', itemsController.delete);


// CRUD completo da tabela Skills
router.get('/skills', skillsController.indexPage);          
router.get('/skills/new', skillsController.newPage);       
router.post('/skills', skillsController.create);            
router.get('/skills/:id', skillsController.showPage);       
router.get('/skills/:id/edit', skillsController.editPage);  
router.put('/skills/:id', skillsController.update);         
router.delete('/skills/:id/delete', skillsController.delete);  

// Listar todos os progressos
router.get('/character-adventure-progresses', characterAdventureProgressController.indexPage);
// Página para criar novo progresso
router.get('/character-adventure-progresses/new', characterAdventureProgressController.newPage);
// Criar novo progresso
router.post('/character-adventure-progresses', characterAdventureProgressController.create);
// Mostrar progresso detalhado
router.get('/character-adventure-progresses/:id', characterAdventureProgressController.showPage);
// Página de edição do progresso
router.get('/character-adventure-progresses/:id/edit', characterAdventureProgressController.editPage);
// Atualizar progresso
router.put('/character-adventure-progresses/:id', characterAdventureProgressController.update);
// Deletar progresso
router.delete('/character-adventure-progresses/:id/delete', characterAdventureProgressController.delete);


module.exports = router;
 /***
  * 
  * 
  
 http://localhost:3000/attributes

  */