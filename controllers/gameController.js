const { Scene, Npc } = require('../models');

const gameController = {
  showPlayScreen: async (req, res) => {
    const id = parseInt(req.params.id, 10);  // Garante que o ID seja um número inteiro

    try {

      const scene = await Scene.findByPk(id, {
        include: [{ model: Npc, as: 'npc' }]
      });

      if (!scene) {
        return res.status(404).send('Cena não encontrada.');
      }


      const sceneAll = await Scene.findAll({
        include: [{ model: Npc, as: 'npc' }]
      });


      const npc = scene.npc;

      res.render('game/play', {
        scene,
        npc,
        sceneAll
      });
    } catch (error) {
      console.error('Erro ao carregar a cena:', error);
      res.status(500).send('Erro ao carregar a tela do jogo.');
    }
  },
  nextPlayScreen: async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
      // Busca cena principal com NPC
      const scene = await Scene.findByPk(id, {
        include: [{ model: Npc, as: 'npc' }]
      });

      if (!scene) {
        return res.status(404).send('Cena não encontrada.');
      }

      // Extrai os IDs das ações da cena
      const firstAction = scene.firstAction;
      const secondAction = scene.secondAction;
      const thirdAction = scene.thirdAction;

      // Busca cenas referenciadas, mas sem NPC
      const sceneFirstAction = await Scene.findByPk(firstAction);
      const sceneSecondAction = await Scene.findByPk(secondAction);
      const sceneThirdAction = await Scene.findByPk(thirdAction);

      // Retorna como JSON para uso via fetch()
      res.json({
        scene,
        npc: scene.npc,
        sceneFirstAction,
        sceneSecondAction,
        sceneThirdAction
      });

    } catch (error) {
      console.error('Erro ao carregar a cena:', error);
      res.status(500).send('Erro ao carregar a tela do jogo.');
    }
  }

};

module.exports = gameController;
