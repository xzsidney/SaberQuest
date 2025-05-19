const { ActionResult } = require('../models');

const actionResultController = {
  list: async (req, res) => {
    const actionResults = await ActionResult.findAll();
    res.render('actionresult/index', { actionResults, user: req.session.user });
  },

  createForm: (req, res) => {
    res.render('actionresult/create', { user: req.session.user });
  },

  create: async (req, res) => {
    const {
      name, testDescription, difficulty, attributeUsed, className,
      successActionId, failureActionId
    } = req.body;

    try {
      await ActionResult.create({
        name,
        testDescription,
        difficulty,
        attributeUsed,
        className,
        successActionId,
        failureActionId
      });
      res.redirect('/action-results');
    } catch (error) {
      console.error('Erro ao criar resultado de ação:', error);
      res.status(500).send('Erro ao criar resultado.');
    }
  },

  view: async (req, res) => {
    const result = await ActionResult.findByPk(req.params.id);
    if (!result) return res.status(404).send('Resultado não encontrado.');
    res.render('actionresult/show', { result, user: req.session.user });
  },

  editForm: async (req, res) => {
    const result = await ActionResult.findByPk(req.params.id);
    if (!result) return res.status(404).send('Resultado não encontrado.');
    res.render('actionresult/edit', { result, user: req.session.user });
  },

  update: async (req, res) => {
    const {
      name, testDescription, difficulty, attributeUsed, className,
      successActionId, failureActionId
    } = req.body;

    try {
      await ActionResult.update({
        name,
        testDescription,
        difficulty,
        attributeUsed,
        className,
        successActionId,
        failureActionId
      }, {
        where: { id: req.params.id }
      });

      res.redirect(`/action-results/${req.params.id}`);
    } catch (error) {
      console.error('Erro ao atualizar resultado:', error);
      res.status(500).send('Erro ao atualizar resultado.');
    }
  },

  delete: async (req, res) => {
    try {
      await ActionResult.destroy({ where: { id: req.params.id } });
      res.redirect('/action-results');
    } catch (error) {
      console.error('Erro ao excluir resultado:', error);
      res.status(500).send('Erro ao excluir resultado.');
    }
  }
};

module.exports = actionResultController;
