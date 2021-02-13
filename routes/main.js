const express = require("express");
const router = express.Router();
const main = require("../controllers/main");

routes.get("/", main.home);

routes.get("/register", main.register);

routes.get("/logIn", main.login);

module.exports = router;
