const categoryModel = require("../modal/categorySchema");

const createCategoryController = async (req, res) => {
    try {

        const { title } = req.body
        if (!title) {
            res.status(500).send("fields are required")
        }
        const newData = await categoryModel.create({ title });
        const newResturent = await newData.save();

        return res.status(200).json(newResturent);

    }
    catch (error) {
        return res.status(200).json("error in create resturent category", error);

    }

}


const deleteCategoryController = async (req, res) => {
    try {

        var id = req.params.id;

        const newResturent = await categoryModel.findByIdAndDelete({ _id: id });


        res.status(200).json({ message: "success", newResturent });
        console.log(newResturent, "returent category deleted");
    }
    catch (error) {
        res.status(200).json("error in create resturent category", error);

    }

}



const getAllCategoryController = async (req, res) => {
    try {

        const newResturent = await categoryModel.find({});

        return res.status(200).json({ message: "success", newResturent });

    }
    catch (error) {
        return res.status(200).json("error in create resturent category", error);

    }

}


const updateCategoryController = async (req, res) => {
    try {

        const id = req.params.id;

        const data = await categoryModel.findById(id);

        const { title } = req.body

        if (title) {
            data.title = title
        }

        const updatedData = await data.save()

        return res.status(200).json({ message: "success", updatedData });

    }
    catch (error) {
        return res.status(200).json("error in create resturent category", error);

    }

}

module.exports = { createCategoryController, getAllCategoryController, deleteCategoryController, updateCategoryController }


