const userModel = require("../modal/userSchema");
const bcrypt = require("bcryptjs");

const userGetController = async (req, res) => {
    try {
        const userExist = await userModel.findById({_id : req.body.id})
        
        if(!userExist){
            return res.status().send({message : "user not found"})
        }
        
        userExist.password = undefined

        res.status(200).send({user_details : userExist })
        console.log(userExist);

    } catch (error) {
        res.status(400).send("error in user REgisteration")
        console.log(error);
    }
}

const userUpdateController = async (req, res) => {
    try {
        const userExist = await userModel.findById({_id : req.body.id})
        
        if(!userExist){
            return res.status().send({message : "user not found"})
        }
        
        const {phone, userName, address} = req.body
        if(phone) userExist.phone = phone
        if(userName) userExist.userName = userName
        if(address) userExist.address = address

        const updateUser = await userExist.save()
        
        res.status(200).send({user_details : updateUser })
        console.log(userExist);


    } catch (error) {
        res.status(400).send("error in user REgisteration")
        console.log(error);
    }
}

const userUpdatepasswordController = async (req, res) => {
    try {
        const user = await userModel.findById({_id : req.body.id})
        
        if(!user){
            return res.status().send({message : "user not found"})
        }
        
        const {oldPassword, newPassword} = req.body
    
        if(!oldPassword || !newPassword){
            res.status(400).send({message : "field are required" })
        }

        const isMatch = await bcrypt.compare(oldPassword, user.password)
        if (!isMatch) {
            return   res.status(400).send({message : "invalid password"})
        }

        const hashnewpassword = await bcrypt.hash(newPassword, 10);
        user.password =  hashnewpassword
        
        const updatePassword = await user.save()
        
        res.status(200).send({ message : "password updated" })
        console.log(updatePassword);


    } catch (error) {
        res.status(400).send("error in password updated")
        console.log(error);
    }
}

const userForgotpasswordController = async (req, res) => {
    try {
        
        const {email, newPassword , answer} = req.body
    
        if(!email || !newPassword || !answer){
            return res.status(400).send({message : "field are required" })
        }


        const user = await userModel.findOne({email, answer})
        
        if(!user){
            return res.status().send({message : "user not found or answer is invalid"})
        }
        
        const hashnewpassword = await bcrypt.hash(newPassword, 10);
        user.password =  hashnewpassword
        
        const updatePassword = await user.save()
        
        res.status(200).send({ message : "forget password updated" })
        console.log(updatePassword);


    } catch (error) {
        res.status(400).send("error in password updated")
        console.log(error);
    }
}


const userdeleteController = async (req, res) => {
    try {
        
        const {id} = req.params
    
        const user = await userModel.findByIdAndDelete(id)
                
        res.status(200).send({ message : "user deleted" , user})
        console.log(user);
        

    } catch (error) {
        res.status(400).send("error in delete user")
        console.log(error);
    }
}



module.exports = { userGetController , userUpdateController , userUpdatepasswordController , userForgotpasswordController, userdeleteController}



