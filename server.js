//Server es por dónde va a entrar node para ejecutar el "proyecto",por eso se le mete lo necesario para funcionar y las rutas.

const express = require ("express"); // Encerramos el módulo express en una constante.
const exphbs = require ("express-handlebars"); // Encerramos el módulo express-handlebars en una constante.
const app = express(); // Almacenamos la función express en app para usarlo más fácilmente abajo.
const morgan = require ("morgan");
const indexRouter = require ("./routes/indexRouter"); //RUTAS se incluyen una vez creados los archivos router. Son el "alma" de qué se ve según la acción.
const cocheRouter = require ("./routes/cocheRouter");

require("./connection"); //Conexión a la DB.

//Motor de plantillas
app.engine("hbs",exphbs({
    partialsDir:__dirname+"/views/partials", //partialsDir es una palabra reservada de handlebars y con dirname establecemos el directorio raíz.
    layoutsDir: __dirname+"/views/layouts",
    extname: "hbs" // Palabra reservada para establecer la extensión de los archivos.
}));
app.set("view engine", "hbs");

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev")); //configurar morgan en modo dev.



app.use(indexRouter);
app.use(cocheRouter);
app.use(express.static("public"));
app.listen(3000);

