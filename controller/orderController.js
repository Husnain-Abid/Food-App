const orderModel = require("../modal/orderSchema");

const createOrderController = async (req, res) => {
    try {
        const {cart} = req.body
        if ( !cart ) {
            res.status(500).send("fields are required")
        }
        let total = 0
        cart.map((i)=>{
            total += i.price
        })
        const newData = await orderModel.create({
            foods:cart, 
            payment : total,
            buyer:req.body.id
        });
        const newResturent = await newData.save();
        return res.status(200).json(newResturent);

    }
    catch (error) {
        console.log("error in create resturent category", error);
        res.status(200).json("error in create resturent category",error);
    }

}

const orderStatusController = async (req, res) => {
    try {
        const orderID = req.params.id
        if ( !orderID ) {
            res.status(500).send("please provide valid order")
        }
        const {status} = req.body
        const newData = await orderModel.findByIdAndUpdate(orderID,{status},{new : true})
        const newResturent = await newData.save();
        return res.status(200).json(newResturent);
        
    }
    catch (error) {
        console.log("error in create resturent category", error);
        res.status(200).json("error in create resturent category",error);
    }

}

module.exports = {createOrderController, orderStatusController }


