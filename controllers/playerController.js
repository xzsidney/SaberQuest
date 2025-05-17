// controllers/playerController.js
const { Character } = require('../models');

const playerController = {
  dashboard: (req, res) => {
    res.render('player/index', {
      title: 'Player Dashboard',
      user: req.session.user
    });
  },

  listCharacters: async (req, res) => {
    try {
      const characters = await Character.findAll({
        where: { playerId: req.session.userId }
      });

      res.render('player/characters', {
        title: 'My Characters',
        characters,
        user: req.session.user
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao listar personagens.");
    }
  },

  viewAdventures: (req, res) => {
    res.render('player/adventures', {
      title: 'Available Adventures',
        user: req.session.user
    });
  },

  viewExams: (req, res) => {
    res.render('player/exams', {
      title: 'Available Exams',
      user: req.session.user
    });
  },

  viewInventory: (req, res) => {
    res.render('player/inventory', {
      title: 'My Inventory',
      user: req.session.user
    });
  },

  viewShop: (req, res) => {
    res.render('player/shop', {
      title: 'Game Shop',
        user: req.session.user
    });
  }
};

module.exports = playerController;
