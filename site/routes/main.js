// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const main = require("../controllers/main");

router.get("/", main.home);

router.get("/help", main.help);

router.get("/envios", main.envios);

module.exports = router;
