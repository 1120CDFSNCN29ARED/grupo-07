const express = require("express");
const path = require("path");
const app = express();
const productsRoutes = require("./routes/products");
const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");

app.listen(3000, console.log("Escuchando en el puerto 3000"));

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

/*
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/register.html"));
});

app.get("/logIn", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/logIn.html"));
});*/

app.get("/userProfile", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/userProfile.html"));
});

app.get("/modificationListProducts", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./Views/modificationListProducts.html")
  );
});

app.use("/products", productsRoutes);

app.use("/", mainRoutes);
