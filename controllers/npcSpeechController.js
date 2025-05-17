const { NpcDialogue } = require("../models");

const npcSpeechController = {
  // Lista todas as falas
  indexPage: async (req, res) => {
    const speeches = await NpcDialogue.findAll();
    res.render("game_master/npc_speeches/index", { speeches });
  },

  // Mostra formulário de criação
  newPage: (req, res) => {
    res.render("game_master/npc_speeches/new");
  },

  // Cria nova fala
  create: async (req, res) => {
    const { npc_name, text_physical, text_social, text_mental, type } = req.body;
    await NpcDialogue.create({
      npc_name,
      text_physical,
      text_social,
      text_mental,
      type
    });
    res.redirect("/npc-speeches");
  },

  // Detalhes da fala
  showPage: async (req, res) => {
    const speech = await NpcDialogue.findByPk(req.params.id);
    if (!speech) {
      return res.status(404).send('Speech not found');
    }
    res.render("game_master/npc_speeches/show", { speech });
  },

  // Formulário de edição
  editPage: async (req, res) => {
    const speech = await NpcDialogue.findByPk(req.params.id);
    if (!speech) {
      return res.status(404).send('Speech not found');
    }
    res.render("game_master/npc_speeches/edit", { speech });
  },

  // Atualiza fala
  update: async (req, res) => {
    const { npc_name, text_physical, text_social, text_mental, type } = req.body;
    await NpcDialogue.update(
      {
        npc_name,
        text_physical,
        text_social,
        text_mental,
        type
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/npc-speeches/" + req.params.id);
  },

  // Deleta fala
  delete: async (req, res) => {
    await NpcDialogue.destroy({ where: { id: req.params.id } });
    res.redirect("/npc-speeches");
  },

  // Simular fala do NPC com base no tipo (extra opcional)
  speak: async (req, res) => {
    const speech = await NpcDialogue.findByPk(req.params.id);
    if (!speech) {
      return res.status(404).send('Speech not found');
    }

    let message = "";
    switch (speech.type) {
      case 'happy':
        message = `😊 ${speech.npc_name} says happily: "${speech.text_social}"`;
        break;
      case 'angry':
        message = `😠 ${speech.npc_name} says angrily: "${speech.text_mental}"`;
        break;
      case 'neutral':
        message = `😐 ${speech.npc_name} says: "${speech.text_physical}"`;
        break;
      default:
        message = `${speech.npc_name} says: "${speech.text_physical}"`;
    }

    res.render("game_master/npc_speeches/speak", { speech, message });
  }
};

module.exports = npcSpeechController;
