const express = require("express");
const { createResturentController, getAllResturentController, deleteResturentController, getSingleResturentController} = require("../controller/resturentController");
const authMiddleWare = require("../middleware/authMiddleware");


const routerResturent = express.Router();


routerResturent.post("/create-data", authMiddleWare , createResturentController);
routerResturent.get("/get-data",  getAllResturentController);
routerResturent.get("/get-single-data/:id",  getSingleResturentController);
routerResturent.delete("/dalete-data/:id", authMiddleWare , deleteResturentController);


module.exports = routerResturent








