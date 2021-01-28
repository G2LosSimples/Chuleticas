const express = require ("express"); // Encerramos el modulo express en una constante.
const exphbs = require ("express-handlebars"); // Encerramos el modulo express-handlebars en una constante.
const app = express(); // Almacenamos la funcion express.
const morgan = require ("morgan");

app.engine("hbs",exphbs({
    partialsDir:__dirname+"/views/partials", //partialsDir es una palabra reservada de handlebars y con dirname establecemos el directorio raíz.
    layoutsDir: __dirname+"/views/layouts",
    extname: "hbs" // Palabra reservada para establecer la extensión de los archivos.
}));

app.set("view engine", "hbs");
app.use(morgan("dev")); //configurar morgan en modo dev.
app.listen(3000);
