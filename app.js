const express = require("express");
const app = express();
const path = require("path");


app.listen(3000, console.log("Escuchando en el puerto 3000"));


const staticPath = path.resolve(__dirname, "/public");
app.use(express.static(staticPath));


app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./Views/home.html"))
});

app.get("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./Views/register.html"))
});