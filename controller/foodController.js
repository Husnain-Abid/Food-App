const foodModel = require("../modal/foodSchema");

const createFoodController = async (req, res) => {
    try {

        const { title, description, price, resturent, foodTags, isAvaliabity, rating } = req.body
        if (!title || !description || !price || !resturent ) {
            res.status(500).send("fields are required")
        }

        const newData = await foodModel.create({title, description, price, resturent,foodTags, isAvaliabity, rating});
        const newResturent = await newData.save();

        return res.status(200).json(newResturent);

    }
    catch (error) {
        console.log("error in create resturent category", error);
        return res.status(200).json("error in create resturent category",error);

    }

}


const deleteFoodController = async (req, res) => {
    try {

        var id = req.params.id;

        const newResturent = await foodModel.findByIdAndDelete({_id : id});

        res.status(200).json({message: "success",  newResturent});
        console.log(newResturent,"returent category deleted");

    }
    catch (error) {
        res.status(200).json("error in create resturent category",error);

    }

}


const getAllFoodController = async (req, res) => {
    try {

        const newResturent = await foodModel.find({});

        return res.status(200).json({message: "success",  newResturent});

    }
    catch (error) {
        return res.status(200).json("error in create resturent category",error);

    }

}


const getSingleFoodController = async (req, res) => {
    try {
        const id = req.params.id
        const newResturent = await foodModel.findById({_id : id});

        return res.status(200).json({message: "success",  newResturent});

    }
    catch (error) {
        return res.status(200).json("error in create resturent category",error);

    }

}


const updateFoodController = async (req, res) => {
    try {

        const id = req.params.id;
        
        const data = await foodModel.findById(id);

        const { title, description, price, resturent } = req.body

        const updateData = await foodModel.findByIdAndUpdate(id,{title, description, price, resturent},{ new: true });


        return res.status(200).json({message: "success", updateData });

    }
    catch (error) {
        return res.status(200).json("error in create resturent category",error);

    }

}

module.exports = {createFoodController, getAllFoodController, deleteFoodController, updateFoodController, getSingleFoodController}


