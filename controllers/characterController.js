const { Character } = require('../models');

const characterController = {
  // Lista todos os personagens do jogador
  listCharacters: async (req, res) => {
    try {
      const characters = await Character.findAll({
        where: { playerId: req.session.userId }
      });
      res.render('character/index', { characters, user: req.session.user, title: 'Meus Personagens' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao listar personagens.');
    }
  },

  // Exibe o formulário de criação
  createPage: (req, res) => {
    res.render('character/create', {
      title: 'Criar Personagem',
      user: req.session.user
    });
  },

  // Cria personagem no banco
 createCharacter: async (req, res) => {
  const {
    name,
    className,
    biography,
    gender,
    age,
    level,
    hp,
    mana,
    schoolGrade,
    strength,
    dexterity,
    constitution,
    perception,
    cognition,
    willpower,
    skills,
    items,
    playerId
  } = req.body;
  console.log(req.body);
  // Verifica se itens veio como string JSON, converte
  try {
    // Se itens veio como string JSON, converte
    const parsedItems = items ? JSON.parse(items) : [];

    await Character.create({
      name,
      className,
      biography,
      gender,
      age,
      level: parseInt(level) || 1,
      hp: parseInt(hp),
      mana: parseInt(mana),
      schoolGrade,
      strength: parseInt(strength),
      dexterity: parseInt(dexterity),
      constitution: parseInt(constitution),
      perception: parseInt(perception),
      cognition: parseInt(cognition),
      willpower: parseInt(willpower),
      skills,
      items: parsedItems,
      playerId
    });

    res.redirect('/player/characters');
  } catch (error) {
    console.error('Erro ao criar personagem:', error);
    res.status(500).send('Erro ao criar personagem.');
  }
},


  // Exibe detalhes do personagem
  viewCharacter: async (req, res) => {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character || character.playerId !== req.session.userId) {
        return res.status(403).send('Acesso negado.');
      }
      res.render('character/show', { character, user: req.session.user, title: 'Detalhes do Personagem' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar personagem.');
    }
  },

  // Formulário de edição
  editCharacterPage: async (req, res) => {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character || character.playerId !== req.session.userId) {
        return res.status(403).send('Acesso negado.');
      }
      res.render('character/edit', { character, user: req.session.user, title: 'Editar Personagem' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar personagem para edição.');
    }
  },

  // Atualiza personagem
  updateCharacter: async (req, res) => {
    const { name, className } = req.body;
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character || character.playerId !== req.session.userId) {
        return res.status(403).send('Acesso negado.');
      }

      await Character.update(
        { name, className },
        { where: { id: req.params.id } }
      );

      res.redirect('/player/characters');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar personagem.');
    }
  },

  // Exclui personagem
  deleteCharacter: async (req, res) => {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character || character.playerId !== req.session.userId) {
        return res.status(403).send('Acesso negado.');
      }

      await character.destroy();
      res.redirect('/player/characters');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao excluir personagem.');
    }
  }
};

module.exports = characterController;
