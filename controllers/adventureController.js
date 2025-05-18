const { Adventure } = require('../models');

const adventureController = {
  // Lista todas as aventuras
  listAdventures: async (req, res) => {
    const adventures = await Adventure.findAll();
    res.render('adventure/index', { adventures, user: req.session.user });
  },

  // Exibe formulário de criação
  createForm: (req, res) => {
    res.render('adventure/create', { user: req.session.user });
  },

  // Cria a aventura no banco
  createAdventure: async (req, res) => {
    const { name, description, difficulty, reward, requirement, level } = req.body;
    try {
      await Adventure.create({ name, description, difficulty, reward, requirement, level });
      res.redirect('/adventures');  
    } catch (error) {
      console.error('Erro ao criar aventura:', error);
      res.status(500).send('Erro ao criar aventura.');
    }
  },

  // Visualizar detalhes de uma aventura
  viewAdventure: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) return res.status(404).send('Aventura não encontrada.');
    res.render('adventure/show', { adventure, user: req.session.user });
  },

  // Exibe formulário de edição
  editForm: async (req, res) => {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) return res.status(404).send('Aventura não encontrada.');
    res.render('adventure/edit', { adventure, user: req.session.user });  
  },

  // Atualiza no banco
  updateAdventure: async (req, res) => {
    const { name, description, difficulty, reward, requirement, level } = req.body;
    try {
      await Adventure.update(
        { name, description, difficulty, reward, requirement, level },
        { where: { id: req.params.id } }
      );
      res.redirect(`/adventures/${req.params.id}`);
    } catch (error) {
      console.error('Erro ao atualizar aventura:', error);
      res.status(500).send('Erro ao atualizar aventura.');
    }
  },

  // Exclui uma aventura
  deleteAdventure: async (req, res) => {
    try {
      await Adventure.destroy({ where: { id: req.params.id } });
      res.redirect('/adventures');  
    } catch (error) {
      console.error('Erro ao excluir aventura:', error);
      res.status(500).send('Erro ao excluir aventura.');
    }
  }
};

module.exports = adventureController;
