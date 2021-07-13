require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const routesUsuarios = require('./routes/usuarios');
const routesComercios = require('./routes/comercio');
const routesShopping = require('./routes/shopping');

const app = express();

console.log("Hola");

app.use(morgan('tiny'));
app.use('/usuarios', routesUsuarios);
app.use('/comercio', routesComercios);
app.use('/shopping', routesShopping);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);
