const express = require("express");

const authMiddleWare = require("../middleware/authMiddleware");
const adminMiddleWare = require("../middleware/adminMiddleware");
const { createOrderController, orderStatusController } = require("../controller/orderController");


const routerFood = express.Router();


routerFood.post("/create-data", authMiddleWare ,createOrderController );
routerFood.post("/order-status/:id", authMiddleWare, adminMiddleWare ,orderStatusController );


module.exports = routerFood




