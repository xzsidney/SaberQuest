// controllers/userController.js
const bcrypt = require('bcrypt');
const { User } = require('../models');

const userController = {
  registerPage: (req, res) => {
    
    res.render('auth/register', { title: 'Create Account' ,   user: req.session.user });
  },

 registerUser: async (req, res) => {
    const { name, username, email, password, role } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10); // 🔐 Aqui estava o erro

      await User.create({
        name,
        username,
        email,
        password: hashedPassword,
        role: role || 'player'
      });

      res.redirect('/login');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao registrar usuário.');
    }
  },

  profile: async (req, res) => {
    try {
      const user = await User.findByPk(req.session.userId);
      res.render('user/profile', {
        title: 'My Profile',
        user
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao carregar perfil.');
    }
  },

  updateProfile: async (req, res) => {
    const { name, email } = req.body;
    try {
      await User.update(
        { name, email },
        { where: { id: req.session.userId } }
      );
      res.redirect('/profile');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar perfil.');
    }
  }
};

module.exports = userController;
