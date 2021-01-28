const {Schema, model} = require ("mongoose");
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
    itv: {
        type: Date,
        required: true
        },
    precio_coste: {
        type: Number,
        required: true
        },
    precio_venta: {
        type: Number,
        required: true
        },
    disponibilidad: {
        type: Boolean,
        required: true
        },
    stock: {
        type: Number,
        required: true
        },
    foto: {
        type: String,
        required: true
        }
});

module.exports = model("Coche", carSchema, "coches");
