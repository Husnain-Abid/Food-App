const express = require("express");
const { registerController, loginController } = require("../controller/authController");

const routerAuth = express.Router();


routerAuth.post("/register", registerController)
routerAuth.post("/login", loginController)




module.exports = routerAuth








