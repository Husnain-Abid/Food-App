const express = require("express");
const { createCategoryController, getAllCategoryController, updateCategoryController, deleteCategoryController } = require("../controller/categoryController");
const authMiddleWare = require("../middleware/authMiddleware");


const routerCategory = express.Router();


routerCategory.post("/create-data", authMiddleWare , createCategoryController);
routerCategory.get("/get-data",  getAllCategoryController);
routerCategory.put("/update-data/:id",  updateCategoryController);
routerCategory.delete("/delete-data/:id", authMiddleWare , deleteCategoryController);


module.exports = routerCategory








