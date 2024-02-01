const userModel = require("../modal/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const registerController = async (req, res) => {
    try {

        const { userName, email, password, address, phone, usertype, answer } = req.body


        if (!userName || !email || !password || !address || !phone || !usertype || !answer) {
            return res.status(400).send("Please all field provide")
        }

        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).send("user already exist")
        }

        var hashpassword = await bcrypt.hash(password, 10);


        const newUser = await userModel.create({
            userName,
            email,
            password: hashpassword,
            address,
            phone,
            answer
        })

        res.status(201).send({ message: "user Created successfully", newUser })

    } catch (error) {
        res.status(400).send({ message: "error in user REgisteration", error })
        console.log(error);
    }
}


const loginController = async (req, res) => {
    try {

        const { email, password } = req.body


        if (!email || !password) {
            return res.status(400).send("Please all field provide")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).send(" ivalid cradential ")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).send("please enter valid cradential ")
        }

        const token = jwt.sign({id: user._id},process.env.SECRETE_KEY,{expiresIn: "7d"})

        user.password = undefined


        res.status(201).send({ message: "login successfully", user,token })
        console.log(user);
        console.log(token);


    } catch (error) {
        res.status(400).send({ message: "error in user REgisteration", error })
        console.log(error);
    }
}



module.exports = { registerController, loginController }

