const { Router } = require("express");
const routes = Router();
const main = require("../controllers/main");

routes.get("/", main.home);

routes.get("/register", main.register);

routes.get("/logIn", main.login);

module.exports = routes;
