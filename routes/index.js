const express = require('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes');  
const adminRoutes = require('./adminRoutes');
const playerRoutes = require('./playerRoutes');
const userRoutes = require('./userRoutes'); 
const authRoutes = require('./authRoutes'); 
router.use('/', homeRoutes);
router.use('/', adminRoutes);
router.use('/', playerRoutes);
router.use('/', userRoutes);
router.use('/', authRoutes);

module.exports = router;
 

 /****************** Router *********** 
const authRoutes = require('./authRoutes'); 
const profileRoutes = require('./profileRoutes'); 
const provaRoutes = require('./provaRoutes'); 
const batalhaRoutes = require('./batalhaRoutes'); 
const useralhaRoutes = require('./userRoutes'); 
const adminRoutes = require('./adminRoutes');
const gmRoutes = require('./gmRoutes'); 
const adventureRoutes = require('./adventureRoutes');
const adventureactionRoutes = require('./adventureactionRoutes'); 
const npcspeechRouters = require('./npcspeechRouters'); 
const questRouter = require('./questRouter'); 
const character = require('./characterRouter'); 
 
 
router.use('/', authRoutes); 
router.use('/', profileRoutes);  
router.use('/', provaRoutes);  
router.use('/', batalhaRoutes);  
router.use('/', useralhaRoutes);  
router.use('/', adminRoutes); 
router.use('/', gmRoutes);  
router.use('/', adventureRoutes);
router.use('/', adventureactionRoutes);  
router.use('/', npcspeechRouters);  
router.use('/', questRouter);  
router.use('/', character);  
 
  
 /****************** Router ************/



 
// Exportando o roteador para ser utilizado no app.js

