const { AdventureAction, Adventure } = require("../models");

// Exemplo de controlador de Quest
const questController = {

  inicio: async (req, res) => {
    const questId = 7; 
    const actionstId = 1; 
    const adventureAction = await AdventureAction.findByPk(actionstId);
     const adventure = await Adventure.findByPk(questId); 
    res.render('game_master/quest/index', { adventure, adventureAction });
  },

   actionQuest: async (req, res) => {
    const questId = req.params.id;  
     const adventureId = req.params.id;  
    res.render('game_master/quest/action_quest', { questId, adventureId });
  },

   teste: async (req, res) => {
    const questId = req.params.id;  
     const adventureId = req.params.id;  
    res.render('game_master/quest/teste', { questId, adventureId });
  },
   // Carregar a ação da aventura via JSON para usar com AJAX/Fetch
  carregarAdventure: async (req, res) => { 
    try {
      const questId = req.params.id;
      const adventureAction = await AdventureAction.findByPk(questId);

      if (adventureAction) {
        res.json(adventureAction);
      } else {
        res.status(404).json({ error: 'Aventura não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar aventura' });
    }
  },

  proximo: (req, res) => {
    // Lógica para avançar na quest, com base na ação do jogador
    const action = req.body.action;
    let message = "";
    let options = [];

    // Decidindo a próxima mensagem e opções com base na ação escolhida
    if (action === "Falar com o professor") {
      message = "Você falou com o professor e aprendeu algo novo!";
      options = ["Estudar na biblioteca", "Ir para a quadra de esportes"];
    } else if (action === "Ir para a biblioteca") {
      message = "Você encontrou um livro muito interessante!";
      options = ["Estudar mais", "Ir para a sala de computação"];
    } else if (action === "Ir para a cantina") {
      message = "Você fez novos amigos na cantina!";
      options = ["Falar sobre isso com o diretor", "Ir para o auditório"];
    }

    // Renderizando novamente a página com novas opções
    res.render('quest', { message, options });
  },

  voltar: (req, res) => {
    // Lógica para voltar à etapa anterior da quest
    const message = "Você voltou à etapa anterior da quest.";
    const options = ["Voltar à biblioteca", "Falar com o professor"];
    
    // Renderizando a página EJS com a mensagem de voltar
    res.render('quest', { message, options });
  }
};

module.exports = questController;
