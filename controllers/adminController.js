// controllers/adminController.js

 const bcrypt = require("bcrypt");
 const { User } = require("../models");
 
 const adminController = {
   loginPage: (req, res) => {
     res.render("auth/login");
   },
 
   dashboard: async (req, res) => { 
   },

   listUsers: async (req, res) => { 
    },

 
    userDetails: (req, res) => { 
   },
 };
 
 module.exports = adminController;