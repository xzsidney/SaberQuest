const { AdventureAction, Adventure } = require("../models");

const adventureActionsController = {
  // Lista todas as ações de aventura
  indexPage: async (req, res) => {
    console.log("indexPage");
    const actions = await AdventureAction.findAll({
      include: [
        { model: Adventure, as: 'adventure' }
      ]
    });
    res.render("game_master/actions/index", { actions });
  },

  // Mostra formulário de criação
  newPage: async (req, res) => {
    const adventures = await Adventure.findAll();
    res.render("game_master/actions/new", { adventures });
  },

  // Cria nova ação de aventura
  create: async (req, res) => {
    const { name, description, difficulty, resultTest, physicalAction, socialAction, mentalAction, adventureId } = req.body; 
    await AdventureAction.create({
      name,
      description,
      difficulty,
      resultTest,
      physicalAction,
      socialAction,
      mentalAction,
      adventureId
    });
    res.redirect("/actions");
  },

  // Detalhes da ação
  showPage: async (req, res) => {
    const action = await AdventureAction.findByPk(req.params.id, {
      include: [
        { model: Adventure, as: 'adventure' }
      ]
    });
    if (!action) {
      return res.status(404).send('Action not found');
    }
    res.render("game_master/actions/show", { action });
  },

  // Formulário de edição
  editPage: async (req, res) => {
    const action = await AdventureAction.findByPk(req.params.id);
    const adventures = await Adventure.findAll();
    if (!action) {
      return res.status(404).send('Action not found');
    }
    res.render("game_master/actions/edit", { action, adventures });
  },

  // Atualiza ação de aventura
  update: async (req, res) => {
    const { name, description, difficulty, result_test, physicalAction, socialAction, mentalAction, adventureId } = req.body;
    await AdventureAction.update(
      {
        name,
        description,
        difficulty,
        result_test,
        physicalAction,
        socialAction,
        mentalAction,
        adventureId
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/actions/" + req.params.id);
  },

  // Deleta ação de aventura
  delete: async (req, res) => {
    await AdventureAction.destroy({ where: { id: req.params.id } });
    res.redirect("/actions");
  },

  // Executa ação (exemplo simples de lógica)
  executeAction: async (req, res) => {
    const action = await AdventureAction.findByPk(req.params.id);
    if (!action) {
      return res.status(404).send('Action not found');
    }

    // Simulação básica de execução
    const success = Math.random() < 0.5 ? 'Success' : 'Failure'; // Exemplo de chance
    res.render("game_master/actions/execute", { action, success });
  }
};

module.exports = adventureActionsController;
