const express = require("express");
const router = express.Router();
const main = require("../controllers/main");

router.get("/", main.home);

router.get("/register", main.register);

router.get("/logIn", main.login);

router.get("/userProfile", main.profile);

router.get("/help", main.help);

router.get("/envios", main.envios);

module.exports = router;
