const express = require('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes');  
const adminRoutes = require('./adminRoutes'); 
const userRoutes = require('./userRoutes'); 
const authRoutes = require('./authRoutes'); 
const sceneRoutes = require('./sceneRoutes'); 
const gameRoutes = require('./gameRoutes'); 
 

router.use('/', homeRoutes);
router.use('/', adminRoutes);
router.use('/', userRoutes);
router.use('/', authRoutes);
router.use('/', sceneRoutes);
router.use('/', gameRoutes);


 



module.exports = router;