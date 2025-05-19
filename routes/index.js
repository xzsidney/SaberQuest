const express = require('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes');  
const adminRoutes = require('./adminRoutes');
const playerRoutes = require('./playerRoutes');
const userRoutes = require('./userRoutes'); 
const authRoutes = require('./authRoutes'); 
const characterRoutes = require('./characterRoutes'); 
const adventureRoutes = require('./adventureRoutes'); 
const adventureActionRoutes = require('./adventureActionRoutes'); 
const actionResultRoutes = require('./actionResultRoutes'); 
router.use('/', homeRoutes);
router.use('/', adminRoutes);
router.use('/', playerRoutes);
router.use('/', userRoutes);
router.use('/', authRoutes);
router.use('/', characterRoutes);
router.use('/', adventureRoutes);
router.use('/', adventureActionRoutes);
router.use('/', actionResultRoutes);


module.exports = router;