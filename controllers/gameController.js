const {
  Adventure,
  Character,
  AdventureAction,
  ActionResult,
  NpcDialog
} = require('../models');

const gameController = {
 showPlayScreen: async (req, res) => {
    const id_adventure = 13;
    const id_character = 3;

    try {
      const adventure = await Adventure.findByPk(id_adventure);
      const character = await Character.findByPk(id_character);

      // Carrega ações específicas (ID 1, 2, 3) com resultados e diálogos
      const actions = await AdventureAction.findAll({
        where: {
          id: [1, 2, 3]
        },
        include: [
          {
            model: ActionResult,
            as: 'physical',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: ActionResult,
            as: 'social',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: ActionResult,
            as: 'mental',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: NpcDialog,
            as: 'npcDialog' // ← este é o campo npcDialogId diretamente na AdventureAction
          }
        ]
      });

      res.render('game/play', {
        adventure,
        character,
        actions
      });

    } catch (error) {
      console.error('Erro ao carregar tela de jogo:', error);
      res.status(500).send('Erro ao carregar a tela do jogo.');
    }
  },

  getNextActions: async (req, res) => {
    const { actionsId } = req.params;

    try {
        const action = await AdventureAction.findAll({
        where: {
          id: actionsId
        },
        include: [
          {
            model: ActionResult,
            as: 'physical',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: ActionResult,
            as: 'social',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: ActionResult,
            as: 'mental',
            include: [{ model: NpcDialog, as: 'npcDialog' }]
          },
          {
            model: NpcDialog,
            as: 'npcDialog' // ← este é o campo npcDialogId diretamente na AdventureAction
          }
        ]
      });

      if (!action) {
        return res.status(404).json({ error: 'Ação não encontrada.' });
      }
 
      res.json({ action });

    } catch (error) {
      console.error('Erro ao buscar próxima ação:', error);
      res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
  },

  getAction: async (req, res) => {
    const { actionsId } = req.params;

    try {
      const action = await AdventureAction.findByPk(actionsId);  

      if (!action) {
        return res.status(404).json({ error: 'Ação não encontrada.' });
      }

      res.json({ action });  
    } catch (error) {
      console.error('Erro ao buscar ação:', error);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
};

module.exports = gameController;
