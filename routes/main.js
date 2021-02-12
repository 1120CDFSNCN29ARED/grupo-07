const { Router } = require("express");
const routes = Router();
const main = require("../controllers/main");

router.get("/", main.home);

router.get("/register", main.register);

router.get("/logIn", main.login);

module.exports = routes;
