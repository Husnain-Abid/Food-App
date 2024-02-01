const resturentModel = require("../modal/resturentSchema")

const createResturentController = async (req, res) => {
    try {

        const { title, coords, foods, resturent_code } = req.body
        if (!title || !coords) {
            res.status(500).send("fields are required")
        }
        const newData = await resturentModel.create({
            title, coords, foods, resturent_code
        });
        const newResturent = await newData.save();

        return res.status(200).json(newResturent);

    }
    catch (error) {
        return res.status(200).json("error in create resturent",error);

    }

}


const deleteResturentController = async (req, res) => {
    try {

        var id = req.params.id;

        const newResturent = await resturentModel.findByIdAndDelete({_id : id});


        res.status(200).json({message: "success",  newResturent});
        console.log(newResturent,"returent deleted");
    }
    catch (error) {
        res.status(200).json("error in create resturent",error);

    }

}



const getAllResturentController = async (req, res) => {
    try {

        const newResturent = await resturentModel.find({});

        return res.status(200).json({message: "success",  newResturent});

    }
    catch (error) {
        return res.status(200).json("error in create resturent",error);

    }

}


const getSingleResturentController = async (req, res) => {
    try {

        const id = req.params.id;
        
        const newResturent = await resturentModel.findById(id);

        return res.status(200).json({message: "success",  newResturent});

    }
    catch (error) {
        return res.status(200).json("error in create resturent",error);

    }

}

module.exports = { createResturentController,getAllResturentController,getSingleResturentController, deleteResturentController }



