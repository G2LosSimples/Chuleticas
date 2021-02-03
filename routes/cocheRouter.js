const express = require("express");
const router = express.Router();
const cocheController = require("../controllers/cocheController");

router.get("/listadoCoches", cocheController.mostrarListaCoches); //Ruta que va a gestionar el listado de coches: llama al controller que permite recorrer y renderizar el listado de coches disponible en la DB. Nos muestra todos los coches de la DB.

router.get("/urlDetalleCoche/:id", cocheController.mostrarDetallesCoche); //Al clicar en el coche del que queremos saber el detalle sigue la /urlDetalleCoche/:id que hemos puesto como href del <a> de catalogoTemplate y se ejecutar la ruta que busca by id el detalle del coche y lo renderiza.

router.get("/formularioCoche", cocheController.renderFormularioCrear); //Ruta que va a mostrar el formulario para el registro de un nuevo coche cuando se clica en el enlace <a> de la template landingTemplate.

router.post("/crearCoche", cocheController.crearCoche); //La url del formularioNuevoCoche se asocia en esta ruta al controlador que permite crear un nuevo registro en la DB (cocheController.crearCoche).

router.get("/borrarCoche/:id", cocheController.borrarCoche);//La url creada en el <a> de la template "detalle", con el id "almacenado", se asocia al controlador .borrarCoche, que va a eliminar el elemento de la DB que tenga esa id.

router.get("/formularioEditar/:id", cocheController.renderFormularioEditar);//La url creada en el <a> de la template "detalle" para editar se asocia al controlador que renderiza el formulario para ese coche del que estaba viendo el detalle, y permite editar los datos del elemento identificado con la id recogida en la url.

router.post("/editarCoche/:id", cocheController.editarCoche);//Url creada en el type del formulario recogido en la template "formularioUpdate", que se asocia al controlador .editarCoche, que es el que va a permitiri de verdad modificar datos ya registrados.

module.exports = router;
