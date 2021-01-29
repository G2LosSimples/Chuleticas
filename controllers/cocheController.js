const Coche = require("../models/Coche");
const cocheController = {}; 
// cocheController.createNewCoche = async (req,res) => {
//     const {Marca, Modelo, Color, Anio, Combustible, Transmision, ITV, Precio_coste, Precio_venta, Disponibilidad, Stock, Foto}
// }

cocheController.mostrarListaCoches = async (req,res) => {
    const coches = await Coche.find().lean();
    res.render("templates/catalogoTemplate",{muestraCoches:coches});

} 

module.exports = cocheController;