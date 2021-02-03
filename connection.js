//Conexión a la DB a través de Mongoose.

const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/Chuletica"; //Dirección de la DB.

mongoose.connect(mongoDB, { //Conexión con la DB pasándole la dirección. Deprecation warnnings por defecto.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then (db => console.log("Los Simples se han conectado.")) //Indica que nos hemos conectado a la DB
.catch (error => console.log(error)); //Si hay algún error lo muestra en la consola.