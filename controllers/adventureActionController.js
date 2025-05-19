const { AdventureAction } = require('../models');

const adventureActionController = {
  list: async (req, res) => {
    const adventureActions = await AdventureAction.findAll();
    res.render('adventureaction/index', { adventureActions, user: req.session.user });
  },

  createForm: (req, res) => {
    res.render('adventureaction/create', { user: req.session.user });
  },

  create: async (req, res) => {
    const { name, description, difficulty, resultTest, physicalAction, socialAction, mentalAction, adventureId } = req.body;
    try {
      await AdventureAction.create({
        name,
        description,
        difficulty,
        resultTest: resultTest === 'true',
        physicalAction,
        socialAction,
        mentalAction,
        adventureId
      });
      res.redirect('/adventure-actions');
    } catch (error) {
      console.error('Erro ao criar ação de aventura:', error);
      res.status(500).send('Erro ao criar ação.');
    }
  },

  view: async (req, res) => {
    const action = await AdventureAction.findByPk(req.params.id);
    if (!action) return res.status(404).send('Ação não encontrada.');
    res.render('adventureaction/show', { action, user: req.session.user });
  },

  editForm: async (req, res) => {
    const action = await AdventureAction.findByPk(req.params.id);
    if (!action) return res.status(404).send('Ação não encontrada.');
    res.render('adventureaction/edit', { action, user: req.session.user });
  },

  update: async (req, res) => {
    const { name, description, difficulty, resultTest, physicalAction, socialAction, mentalAction, adventureId } = req.body;
    try {
      await AdventureAction.update({
        name,
        description,
        difficulty,
        resultTest: resultTest === 'true',
        physicalAction,
        socialAction,
        mentalAction,
        adventureId
      }, {
        where: { id: req.params.id }
      });
      res.redirect(`/adventure-actions/${req.params.id}`);
    } catch (error) {
      console.error('Erro ao atualizar ação:', error);
      res.status(500).send('Erro ao atualizar ação.');
    }
  },

  delete: async (req, res) => {
    try {
      await AdventureAction.destroy({ where: { id: req.params.id } });
      res.redirect('/adventure-actions');
    } catch (error) {
      console.error('Erro ao excluir ação:', error);
      res.status(500).send('Erro ao excluir ação.');
    }
  }
};

module.exports = adventureActionController;
