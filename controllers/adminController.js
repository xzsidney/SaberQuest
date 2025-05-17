// controllers/adminController.js
const { User } = require("../models");

const adminController = {
  // Página principal do admin
  dashboard: async (req, res) => {
    try {
      const userCount = await User.count();
      res.render("admin/index", {
        title: "Admin Dashboard",
        totalUsers: userCount
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao carregar dashboard do admin.");
    }
  },

  // Listagem de todos os usuários
  listUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.render("admin/users", {
        title: "Users List",
        users
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao listar usuários.");
    }
  },

  // Detalhes de um usuário específico
  userDetails: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).send("Usuário não encontrado.");
      }

      res.render("admin/userDetails", {
        title: "User Details",
        user
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao carregar detalhes do usuário.");
    }
  }
};

module.exports = adminController;
