const express = require("express");
const path = require("path");
const app = express();
const productsRoutes = require("./routes/products");
const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");

app.listen(3000, console.log("Escuchando en el puerto 3000"));

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));



app.use("/products", productsRoutes);

app.use("/", mainRoutes);
