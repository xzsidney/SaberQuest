const { NpcDialog, ActionResult } = require('../models');

const npcDialogController = {
  list: async (req, res) => {
    const dialogs = await NpcDialog.findAll({ include: ['ActionResult'] });
    res.render('npcdialog/index', { dialogs, user: req.session.user });
  },

  createForm: async (req, res) => {
    const actionResults = await ActionResult.findAll();
    res.render('npcdialog/create', { actionResults, user: req.session.user });
  },

  create: async (req, res) => {
    const { actionResultId, npcName, npcType, dialogText, npcMood } = req.body;
    try {
      await NpcDialog.create({ actionResultId, npcName, npcType, dialogText, npcMood });
      res.redirect('/npc-dialogs');
    } catch (error) {
      console.error('Erro ao criar diálogo:', error);
      res.status(500).send('Erro ao criar diálogo.');
    }
  },

  view: async (req, res) => {
    const dialog = await NpcDialog.findByPk(req.params.id, { include: ['ActionResult'] });
    if (!dialog) return res.status(404).send('Diálogo não encontrado.');
    res.render('npcdialog/show', { dialog, user: req.session.user });
  },

  editForm: async (req, res) => {
    const dialog = await NpcDialog.findByPk(req.params.id);
    const actionResults = await ActionResult.findAll();
    if (!dialog) return res.status(404).send('Diálogo não encontrado.');
    res.render('npcdialog/edit', { dialog, actionResults, user: req.session.user });
  },

  update: async (req, res) => {
    const { actionResultId, npcName, npcType, dialogText, npcMood } = req.body;
    try {
      await NpcDialog.update(
        { actionResultId, npcName, npcType, dialogText, npcMood },
        { where: { id: req.params.id } }
      );
      res.redirect(`/npc-dialogs/${req.params.id}`);
    } catch (error) {
      console.error('Erro ao atualizar diálogo:', error);
      res.status(500).send('Erro ao atualizar diálogo.');
    }
  },

  delete: async (req, res) => {
    try {
      await NpcDialog.destroy({ where: { id: req.params.id } });
      res.redirect('/npc-dialogs');
    } catch (error) {
      console.error('Erro ao excluir diálogo:', error);
      res.status(500).send('Erro ao excluir diálogo.');
    }
  }
};

module.exports = npcDialogController;
