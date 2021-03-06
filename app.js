// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("view engine", "ejs");

// ************ Middlewares ************
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

app.listen(3000, console.log("Escuchando en el puerto 3000"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// ************ Route System require and use() ************
const productsRoutes = require("./routes/products"); // Rutas /products
const mainRoutes = require("./routes/main"); // Rutas main

app.use("/products", productsRoutes);
app.use("/", mainRoutes);

// catch 404
app.use((req, res, next) => {
  res.status(404).render("error");
});
