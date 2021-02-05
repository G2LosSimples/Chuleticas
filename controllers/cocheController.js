const Coche = require("../models/Coche"); //Requiero al models/Coche para usarlo en los controller que haga falta, ej. crearCoche.
const cocheController = {}; //Objeto vacío que va a metiendo los controladores que sean necesarios en cada momento.

cocheController.mostrarListaCoches = async (req,res) => {
    const coches = await Coche.find().lean(); //Coche hace referencia al model en models/coche.js
    res.render("templates/catalogoTemplate",{muestraCoches:coches}); //va a renderizar la template catalogoTemplate que tiene creado el helper #muestraCoches
}                                                                    //para que recorra cada elemeto de la lista, y para cada "registro" que hay en la DB

cocheController.mostrarDetallesCoche = async (req,res) => {               //Se crea la const que almacena la búsqueda en la DB
    const cocheDetalle = await Coche.findById({_id:req.params.id}).lean(); //para asimilar la _id a la id de la url y que no se cree una nueva
    res.render("templates/detalle", {detalleCoche:cocheDetalle}); //Renderiza la template detalle que tiene el helper #detalleCoche que muestra el "registro"
}                                                                //que se busca en la DB a través de "cocheDetalle" y muestra el detalle.

cocheController.renderFormularioCrear = (req,res) => { //renderiza la template formularioNuevoCoche que tiene la url "/crearCoche" en el type, que va
    res.render("templates/formularioNuevoCoche"); //a llamar a la cocheController.crearCoche que "activa" el controlador .crearCoche
}

cocheController.crearCoche = async (req,res) => { //El formulario "template/formularioNuevoCoche" contiene la url "/crearCoche", que se liga a la ruta que
    const coche = new Coche(req.body);    //llama este controlador .crearCoche. Se crea un nuevo objeto coche (new Coche, que llama al models(Coche))
    await coche.save(); //lo guarda en la DB (.save) y redirecciona a /listadoCoches --> se ve todo el registro anterior y el nuevo coche añadido.
    res.redirect("/listadoCoches");
}

cocheController.borrarCoche = async (req,res) => { //Coche.deleteOne hace referencia al model en models/coche.js, y va a eliminar ese refgistro utilizando
    await Coche.deleteOne({_id:req.params.id}); //la _id que se le envía desde el front a través de la url creada en el <a> de la template "detalle" y borra
    res.redirect("/listadoCoches");//el objeto con esa id. Redirecciona a /listadoCoches --> muestra el registro "actualizado" sin el coche borrado.
}

cocheController.renderFormularioEditar = async (req, res) => { //Renderiza la template "formularioUpdate", form que tiene la url /editarCoche/this.id
    const cocheDetalle = await Coche.findById({_id:req.params.id}).lean(); //que permitirá editar ese objeto concreto. cocheDetalle encuentra por el coche q
    res.render("templates/formularioUpdate", cocheDetalle);//se va a editar --> renderiza su formulario concreto con los datos registrados en DB.
}

cocheController.editarCoche = async (req, res) => { //Controlador que va a permitir de verdad modificar datos de un registro ya guardado en la DB.
    const filter = {_id:req.params.id};//asimilar la _id (de la DB) a la id de la url y que no se cree una nueva.
    const update = req.body;
    await Coche.findByIdAndUpdate(filter, update); //se indica cómo tiene que buscar (mediante la id recogida en la url) y cómo actualizar.
    res.redirect("/listadoCoches");//redirecciona a listado coches para ver de nuevo el listado, que tendrá el objeto con la edición que hayamos hecho.
}

module.exports = cocheController; //Exportar el objeto cocheController para poder usarlo en cocheRouter