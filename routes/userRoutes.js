const express = require("express");
const { userGetController, userUpdateController, userUpdatepasswordController, userForgotpasswordController, userdeleteController } = require("../controller/userController");
const authMiddleWare = require("../middleware/authMiddleware");

const routerUser = express.Router();


routerUser.get("/get-data", authMiddleWare, userGetController)
routerUser.put("/update-data", authMiddleWare, userUpdateController)
routerUser.post("/update-password", authMiddleWare, userUpdatepasswordController)
routerUser.post("/forgot-password", authMiddleWare, userForgotpasswordController)
routerUser.delete("/delete-data/:id", authMiddleWare, userdeleteController)





module.exports = routerUser








