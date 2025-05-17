const bcrypt = require("bcrypt");
const { User } = require("../models");

const userController = {
  registerPage: (req, res) => {
    res.render("user/register");
  },

  register: async (req, res) => {

    const { name, username, email, password, confirmpassword } = req.body;

    console.log(req.body); 

    if (password !== confirmpassword) {
      return res.status(400).json({ 
        status: "error", 
        message: "As senhas não coincidem." 
      });
    }
    try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userData =  await User.create({name, username, email, password: hash,  role: "aluno", // ou remova se não usar
    });

    return res.render("user/dashboard", { 
      status: "success", 
      cod:201,
      message: "Usuário cadastrado com sucesso!", 
      userData 
    });
 
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      const field = err.errors[0].path;
      const value = err.errors[0].value;
      errorMessage = `O campo '${field}' já está em uso: '${value}'.`;
      return res.status(400).json({ error: errorMessage });
    }
    return res.status(500).json({ error: 'Unexpected error occurred.' });
  }
  },

  profile: async (req, res) => {
    
  },
 
  dashboard: async (req, res) => {
    const  username = req.session.username; 
        
        try {
          const userData  = await User.findOne({ where: { username } });
          if (!userData ) {
            return res.status(400).render("auth/login", { error: "Usuário não encontrado." });
          }
     
          res.render("user/dashboard", { userData });
        } catch (error) {
          res.status(500).render("auth/login", { error: "Erro ao autenticar." });
        }
     
  },

  // Página de edição dos dados do usuário
  edit: async (req, res) => {
    try {
      const id = req.session.userId; // Pega o ID do usuário logado
      if (!id) {
        return res.redirect("/login"); // Se não tiver um ID, redireciona para login
      }

      const user = await User.findByPk(id); // Encontra o usuário no banco de dados
      if (!user) {
        return res.status(404).send("Usuário não encontrado");
      }

      // Renderiza a página edit.ejs, passando os dados do usuário
      res.render("user/edit", { user });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao carregar a edição de dados do usuário");
    }
  },

  // Atualizar os dados do usuário
  update: async (req, res) => {
    
  }

};

module.exports = userController;







/*

const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  cadastro: (req, res) => {
    res.render("usuario");
  },

  createUser: async (req, res) => {

    const { nome, usuario, senha, confirmaSenha, email } = req.body;

    console.log(req.body);

    // Validação simples de senha
    if (senha !== confirmaSenha) {
      return res.status(400).json({ 
        status: "error", 
        message: "As senhas não coincidem." 
      });
    }
    try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senha, salt);

    const user =  await Usuario.create({nome, usuario, senha: hash, email, role: "aluno", // ou remova se não usar
    });

    return res.render("usuario", { 
      status: "success", 
      cod:201,
      message: "Usuário cadastrado com sucesso!", 
      user 
    });

    console.log(user);
  } catch (error) {
    return res.render("usuario", { 
      status: "error", 
      cod:500,
      message: "Erro ao cadastrar usuário: " + error.message 
    });
  }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Usuario.findByPk(id);
  
      if (!user) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
      }
      
      return res.render("usuario", { 
        status: "success", 
        cod:201,
        message: "Usuário  encontrado!", 
        user 
      });
      
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar o usuário." });
    }
  },

  listUsers: async (req, res) => {
    const users = await User.findAll();
    res.render("usuario", { users });
  },
};

module.exports = userController;
*/