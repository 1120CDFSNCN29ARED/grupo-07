// ************ Require's ************
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const models = require("./database/models/index");

//Testing the connection database
const connectServer = async () => {
  try {
    await models.sequelize.authenticate();
    console.log("conectado DB ok");
  } catch (error) {
    console.error("error DB", error);
  }
};
connectServer();

// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("view engine", "ejs");

// ************ Middlewares ************
const staticFolder = path.resolve(__dirname, "./public");

app.use(express.static(staticFolder));

app.listen(4000, console.log("Escuchando en el puerto 4000"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userLogs = require("./middleware/userLogs");
app.use(userLogs);

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
const apiProductsRoutes = require("./routes/APIroutes/products");
const apiUsersRoutes = require("./routes/APIroutes/users");

app.use("/products", productsRoutes);
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/api", apiProductsRoutes);
//app.use("/api", apiUsersRoutes);

// error 404
/*app.use((req, res, next) => {
  res.status(404).render("error");
  next();
});*/
