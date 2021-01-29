const express = require("express");
const router = express.Router();
const cocheController = require("../controllers/cocheController");

router.get("/listadoCoches", cocheController.mostrarListaCoches);

module.exports = router;
