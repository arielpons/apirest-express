require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const routesUsuarios = require('./routes/usuarios');
const routesComercios = require('./routes/comercio');
const routesShopping = require('./routes/shopping');
const dbConnection = require("./configs/mongodb");

const app = express();

dbConnection();

app.use(express.text());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/usuarios', routesUsuarios);
app.use('/comercio', routesComercios);
app.use('/shopping', routesShopping);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);
