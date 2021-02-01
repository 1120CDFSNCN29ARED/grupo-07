const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, console.log("Escuchando en el puerto 3000"));

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/register.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/productDetail.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/productCart.html"));
});

app.get("/logIn", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Views/logIn.html"));
});
