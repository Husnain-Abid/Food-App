const userModel = require("../modal/userSchema");

const adminMiddleWare = async (req, res, next) => {
    try {

        const user = await userModel.findById(req.body.id) ;

        if (user.usertype !== "Admin" ) {
            return res.status(400).send({ message: "Admin have authuraty" })
        } else {
            next();
        }

    } catch (error) {
        res.status(400).send({ message: "please provide tokken" })
    }

}


module.exports = adminMiddleWare




