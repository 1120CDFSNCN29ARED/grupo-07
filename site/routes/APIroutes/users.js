const express = require("express");
const router = express.Router();
const APIUsersControllers = require("../../controllers/APIcontrollers/APIUsersControllers");

/*RUTAS*/

/*listar usuarios*/
router.get("/users", APIUsersControllers.userList);

/*detalle de usuarios*/
//router.get("/users/:id", APIUsersControllers.userDetail);
module.exports = router;
