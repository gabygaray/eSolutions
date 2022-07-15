console.clear();

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

//Sección de conección a la base de datoos
mongoose.connect(mongoString);
const database = mongoose.connection; // Conección a la base de datos

database.on("error", (error) => {
  console.error(error);
});

database.once("connected", () => {
  console.log("Base de datos conectada.");
});

//Sección de aplicación (servidor web).
const app = express();
app.use(cors()); //Evita errores de operaciones cruzadas o el uso compartido de recursos cruzados.
app.use(express.json());

const routes = require("./routes/routesUsers");
app.use("/api", routes); //Primer argumento es el endpoint base, y como segundo argumento el enrutador.

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Servidor express ejecutándose en http://${process.env.HOST}:${process.env.PORT}/`
  );
});
