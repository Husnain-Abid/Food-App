const express = require("express");

const authMiddleWare = require("../middleware/authMiddleware");
const { createFoodController, getAllFoodController, updateFoodController, deleteFoodController, getSingleFoodController } = require("../controller/foodController");


const routerFood = express.Router();


routerFood.post("/create-data", authMiddleWare , createFoodController);
routerFood.get("/get-data",  getAllFoodController);
routerFood.get("/get-single-data/:id",  getSingleFoodController);
routerFood.put("/update-data/:id",  updateFoodController);
routerFood.delete("/delete-data/:id", authMiddleWare , deleteFoodController);


module.exports = routerFood








