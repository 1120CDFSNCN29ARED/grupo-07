const express = require("express");
const router = express.Router();
const main = require("../controllers/main");

router.get("/", main.home);

router.get("/register", main.register);

router.get("/logIn", main.login);

module.exports = router;
