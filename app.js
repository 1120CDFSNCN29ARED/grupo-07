// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
//const createError = require("http-errors");
require("dotenv").config();

// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("view engine", "ejs");

// ************ Middlewares ************
const staticFolder = path.resolve(__dirname, "./public");

app.use(express.static(staticFolder));

app.listen(3000, console.log("Escuchando en el puerto 3000"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: " huerto secreto",
    resave: false,
    saveUninitialized: false,
  })
);

// ************ Route System require and use() ************
const productsRoutes = require("./routes/products"); // Rutas /products
const mainRoutes = require("./routes/main"); // Rutas main
const usersRoutes = require("./routes/users"); // Rutas /users

app.use("/products", productsRoutes);
app.use("/", mainRoutes);
app.use("/users", usersRoutes);

// error 404
app.use((req, res, next) => {
  res.status(404).render("error");
});
