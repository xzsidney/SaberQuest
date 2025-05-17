const bcrypt = require("bcrypt");
const { User } = require("../models");

const authController = {
  loginPage: (req, res) => {
    res.render("auth/login");
  },

  login: async (req, res) => {
    const { username, password } = req.body; 
    
    try {
      const userData  = await User.findOne({ where: { username } });
      if (!userData ) {
        return res.status(400).render("auth/login", { error: "Usuário não encontrado." });
      }

      const isPasswordValid = await bcrypt.compare(password, userData .password);
      if (!isPasswordValid) {
        return res.status(400).render("auth/login", { error: "Senha incorreta." });
      }

      req.session.userId = userData.id;
      req.session.user = userData.name;
      req.session.username = userData.username;
      req.session.email = userData.email;
      req.session.role = userData.role;
      req.session.loggedIn = true;
      res.render("user/dashboard", { userData });
    } catch (error) {
      res.status(500).render("auth/login", { error: "Erro ao autenticar." });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  },
};

module.exports = authController;


/*const bcrypt = require("bcrypt");
const { Usuario } = require("../models");

const authController = {
  login: (req, res) => {
    res.render("login");
  },

  authenticate: async (req, res) => {
    const { usuario, senha } = req.body;
    console.log(usuario, senha);
    const user = await Usuario.findOne({ where: { usuario } });
    if (user && bcrypt.compareSync(senha, user.senha)) {
      req.session.userId = user.id;
      return res.redirect("/");
    }
    res.redirect("/entrar");
  },
};

module.exports = authController;
*/