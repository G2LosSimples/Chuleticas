const express = require("express");
const router = express.Router();
const cocheController = require("../controllers/cocheController");

router.get("/listadoCoches", cocheController.mostrarListaCoches);
router.get("/urlDetalleCoche/:id", cocheController.mostrarDetallesCoche);
router.get("/formularioCoche", cocheController.renderFormularioCrear);
router.post("/crearCoche", cocheController.crearCoche);
router.get("/borrarCoche/:id", cocheController.borrarCoche);
router.get("/formularioEditar/:id", cocheController.renderFormularioEditar);
router.post("/editarCoche/:id", cocheController.editarCoche);

module.exports = router;
