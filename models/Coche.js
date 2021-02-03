const {Schema, model} = require ("mongoose"); //Se llama al Schema y al model de Mongoose --> desectructurado
const carSchema = new Schema ({
    marca: {
        type: String,
        required: true
        },
    modelo: {
        type: String,
        required: true
        },
    color: {
        type: String,
        required: true
        },
    anio: {
        type: Number,
        required: true
        },
    combustible: {
        type: String,
        required: true
        },
    transmision: {
        type: String,
        required: true
        },
    precio_venta: {
        type: Number,
        required: true
        },
    foto: {
        type: String,
        required: true
        }
});

module.exports = model("Coche", carSchema, "coches"); 
//Exportar el Schema creado para usarlo por ejemplo en cocheController. (1º nombre del modelo js que exportamos, 2º cómo se llama en nuevoSchema, 3º cómo ase registra la colección en mongoDB)
