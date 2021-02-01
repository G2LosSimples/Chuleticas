const express = require ("express"); // Encerramos el modulo express en una constante.
const exphbs = require ("express-handlebars"); // Encerramos el modulo express-handlebars en una constante.
const app = express(); // Almacenamos la funcion express.
const morgan = require ("morgan");
const indexRouter = require ("./routes/indexRouter");
const cocheRouter = require ("./routes/cocheRouter");

require("./connection");

app.engine("hbs",exphbs({
    partialsDir:__dirname+"/views/partials", //partialsDir es una palabra reservada de handlebars y con dirname establecemos el directorio raíz.
    layoutsDir: __dirname+"/views/layouts",
    extname: "hbs" // Palabra reservada para establecer la extensión de los archivos.
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");
app.use(morgan("dev")); //configurar morgan en modo dev.
app.use(indexRouter);
app.use(cocheRouter);
app.use(express.static("public"));
app.listen(3000);
