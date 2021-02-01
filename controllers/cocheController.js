const Coche = require("../models/Coche");
const cocheController = {}; 
// cocheController.createNewCoche = async (req,res) => {
//     const {Marca, Modelo, Color, Anio, Combustible, Transmision, ITV, Precio_coste, Precio_venta, Disponibilidad, Stock, Foto}
// }

cocheController.mostrarListaCoches = async (req,res) => {
    const coches = await Coche.find().lean();
    res.render("templates/catalogoTemplate",{muestraCoches:coches});

} 

cocheController.mostrarDetallesCoche = async (req,res) => {
    const cocheDetalle = await Coche.findById({_id:req.params.id}).lean();
    res.render("templates/detalle", {detalleCoche:cocheDetalle});
}

cocheController.renderFormularioCrear = (req,res) => {
    res.render("templates/formularioNuevoCoche");
}

cocheController.crearCoche = async (req,res) => {
 
    const coche = new Coche(req.body);
    await coche.save();
    res.redirect("/listadoCoches");
}

cocheController.borrarCoche = async (req,res) => {
    await Coche.deleteOne({_id:req.params.id});
    res.redirect("/listadoCoches");
}

cocheController.modificarCoche = async (req, res) => {
    await Coche.findOneAndUpdate({})
}

cocheController.renderFormularioEditar = (req, res) => {
    res.render("")
}

module.exports = cocheController;