const { CharacterAdventureProgress, Character, Adventure, AdventureAction } = require("../models");


const characterAdventureProgressController = {
  // Página inicial (lista de progressos)
    indexPage: async (req, res) => {
    try {
      const progresses = await CharacterAdventureProgress.findAll({
        include: [
          { model: Character, as: 'character' },  // alias 'character' usado nas associações
          { model: Adventure, as: 'adventure' },  // alias 'adventure' usado nas associações
          { model: AdventureAction, as: 'action' }  // alias 'action' usado nas associações
        ]
      });

      res.render("game_master/character_adventure_progresses/index", { progresses });
    } catch (error) {
      console.error("Erro ao carregar os progressos:", error);
      res.status(500).send("Erro ao carregar os dados de progresso.");
    }
  },

  // Página para criar novo progresso
  newPage: (req, res) => {
    res.render("game_master/character_adventure_progresses/new");
  },

  // Criar novo progresso
  create: async (req, res) => {
    const {
      characterId,
      adventureId,
      adventureAttempts,
      adventureCompleted,
      startDate,
      endDate,
    } = req.body;
    try {
      await CharacterAdventureProgress.create({
        characterId,
        adventureId,
        adventureAttempts,
        adventureCompleted,
        startDate,
        endDate,
      });
      res.redirect("/character-adventure-progresses");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao criar o progresso.");
    }
  },

  // Mostrar detalhes do progresso
  showPage: async (req, res) => {
    const progressId = req.params.id;

    try {
      const progress = await CharacterAdventureProgress.findOne({
        where: { id: progressId },
        include: [
          { model: Character, as: "character", attributes: ["id", "name"] },
          { model: Adventure, as: "adventure", attributes: ["id", "name"] },
          { model: AdventureAction, as: "action", attributes: ["id", "name"] },
        ],
      });

      if (!progress) {
        return res.status(404).send("Progresso não encontrado.");
      }

      res.render("game_master/character_adventure_progresses/show", {
        progress,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Erro ao buscar o progresso do personagem na aventura.");
    }
  },

  // Página de edição de progresso
  editPage: async (req, res) => {
    const progressId = req.params.id;

    try {
      const progress = await CharacterAdventureProgress.findByPk(progressId);
      if (!progress) {
        return res.status(404).send("Progresso não encontrado.");
      }

      res.render("game_master/character_adventure_progresses/edit", {
        progress,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao buscar progresso para edição.");
    }
  },

  // Atualizar progresso
  update: async (req, res) => {
    const progressId = req.params.id;
    const {
      characterId,
      adventureId,
      adventureAttempts,
      adventureCompleted,
      startDate,
      endDate,
    } = req.body;

    try {
      const progress = await CharacterAdventureProgress.findByPk(progressId);

      if (!progress) {
        return res.status(404).send("Progresso não encontrado.");
      }

      await progress.update({
        characterId,
        adventureId,
        adventureAttempts,
        adventureCompleted,
        startDate,
        endDate,
      });

      res.redirect(`/character-adventure-progresses/${progressId}`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao atualizar o progresso.");
    }
  },

  // Deletar progresso
  delete: async (req, res) => {
    const progressId = req.params.id;

    try {
      const progress = await CharacterAdventureProgress.findByPk(progressId);
      if (!progress) {
        return res.status(404).send("Progresso não encontrado.");
      }

      await progress.destroy();
      res.redirect("/character-adventure-progresses");
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao deletar o progresso.");
    }
  },
};

module.exports = characterAdventureProgressController;
