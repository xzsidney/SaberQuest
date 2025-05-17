
const express = require('express');
const router = express.Router();
const charController = require("../controllers/charController");
 

// Rota para criar personagem
router.get("/character", charController.charPage);
router.get("/characteres", charController.listPage);

 


 
module.exports = router;
