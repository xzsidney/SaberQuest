const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController.js");


// Middleware para proteger as rotas
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/profile', isAuthenticated, userController.profile);
router.get('/dashboard', isAuthenticated, userController.dashboard);
router.get('/register', userController.registerPage);
router.post('/register', userController.register);


router.get('/casa', isAuthenticated, (req, res) => {
  res.render('casa', { user: req.session.user });
});
/*
// Rota de cadastro
router.get('/registrar', (req, res) => {
    // Lógica de login
     res.render('registrar');
  });

  router.post("/registrar", userController.createUser);
  router.get("/usuario/:id", userController.getUser);
  router.get("/usuario", (req, res) => {
    if (!req.session.userId) {
      return res.redirect("/login");
    }
    let id = req.session.userId;

    res.redirect(`/usuario/${id}`);
    
  });
*/

 
 
module.exports = router;
