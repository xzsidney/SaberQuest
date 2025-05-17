// controllers/adminController.js

 const bcrypt = require("bcrypt");
 const { User } = require("../models");
 
 const adminController = {
   loginPage: (req, res) => {
     res.render("auth/login");
   },
 
   dashboard: async (req, res) => {
  const user = await User.findByPk(req.session.userId);
  res.render("admin/dashboard", { user });
},

  listUsers: async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("admin/users", { users });
  } catch (error) {
    res.status(500).send("Erro ao buscar usuários");
  }
},

 
   userDetails: async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }
    res.render("admin/userDetails", { user });
  } catch (error) {
    res.status(500).send("Erro ao buscar detalhes do usuário");
  }
},
editUserForm: async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('Usuário não encontrado');
    res.render('admin/editUser', { user });
  } catch (error) {
    res.status(500).send('Erro ao carregar formulário de edição');
  }
},

updateUser: async (req, res) => {
  try {
    const { name, email, role } = req.body;
    await User.update(
      { name, email, role },
      { where: { id: req.params.id } }
    );
    res.redirect('/admin/users');
  } catch (error) {
    res.status(500).send('Erro ao atualizar usuário');
  }
},

deleteUser: async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.redirect('/admin/users');
  } catch (error) {
    res.status(500).send('Erro ao excluir usuário');
  }
},


 };
 
 module.exports = adminController;