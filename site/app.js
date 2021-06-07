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

//sincroniza el modelo con la tabla de datos -> Synchronizing all models at once
const alter = false; // false para que no haga sincronizacion
//const force = true;  //elimina los modelos
models.sequelize.sync({alter}) ;
console.log("All models were synchronized successfully.");



// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("view engine", "ejs");

// ************ Middlewares ************
const staticFolder = path.resolve(__dirname, "./public");

app.use(express.static(staticFolder));

app.listen(4000, console.log("Escuchando en el puerto 4000"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false })); //->MIDDLEWERE PARA API (BODY-> X-WWW-FORM-URLENCODED)
app.use(express.json()); //->MIDDLEWERE PARA API  (BODY-> RAW)

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

/* app.post("/api/products", (req, res) =>{
  res.status(201).json(req.body);
})

app.post("/api/products", (req, res) =>{
  res.status(201).json({
    meta:{
      status:201,
      id:"nuevo id" - permite hacer nuevas referencias sobre el objeto creado
    },
  });
  });

// error 404
/*app.use((req, res, next) => {
  res.status(404).render("error");
  next();
});*/
