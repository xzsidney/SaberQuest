const { Scene, Npc } = require('../models');

const sceneController = {
  // Listar todas as cenas
  index: async (req, res) => {
    try {
      const scenes = await Scene.findAll({ include: ['npc'] });
      res.render('scene/index', { scenes });
    } catch (error) {
      res.status(500).send('Erro ao listar cenas.');
    }
  },

  // Exibir formulário para nova cena
  new: async (req, res) => {
    try {
      const npcs = await Npc.findAll(); 
      res.render('scene/new', { npcs });
    } catch (error) {
      res.status(500).send('Erro ao carregar formulário.');
    }
  },

  // Criar uma nova cena
 // Criar uma nova cena
create: async (req, res) => {
  const {
    title,
    firstAction,
    secondAction,
    thirdAction,
    failAction,
    difficulty,
    attributeUsed,
    npcId,
    environmentDescription,
    characterFeeling
  } = req.body;

  try {
    await Scene.create({
      title,
      firstAction,
      secondAction,
      thirdAction,
      failAction,
      difficulty,
      attributeUsed,
      npcId,
      environmentDescription,
      characterFeeling
    });
    res.redirect('/scene');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar cena.');
  }
},

  // Exibir detalhes de uma cena
  show: async (req, res) => {
    try {
      const scene = await Scene.findByPk(req.params.id, { include: ['npc'] });
      if (!scene) return res.status(404).send('Cena não encontrada.');
      res.render('scene/show', { scene });
    } catch (error) {
      res.status(500).send('Erro ao exibir cena.');
    }
  },

  // Formulário de edição
  edit: async (req, res) => {
    try {
      const scene = await Scene.findByPk(req.params.id);
      const npcs = await Npc.findAll();
      if (!scene) return res.status(404).send('Cena não encontrada.');
      res.render('scene/edit', { scene, npcs });
    } catch (error) {
      res.status(500).send('Erro ao carregar edição.');
    }
  },

  // Atualizar cena
  update: async (req, res) => {
    try {
      await Scene.update(req.body, { where: { id: req.params.id } });
      res.redirect('/scene');
    } catch (error) {
      res.status(500).send('Erro ao atualizar cena.');
    }
  },

  // Deletar cena
  destroy: async (req, res) => {
    try {
      await Scene.destroy({ where: { id: req.params.id } });
      res.redirect('/scene');
    } catch (error) {
      res.status(500).send('Erro ao deletar cena.');
    }
  }
};

module.exports = sceneController;
