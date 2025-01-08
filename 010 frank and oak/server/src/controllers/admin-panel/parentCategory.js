const ParentCategory = require("../../models/parentCategory");

const createCategory = async ( req, res ) => {
    try{
        const data = new ParentCategory(req.body);
        const response = await data.save();

        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const readParentCategories = async (req, res) => {
    try{
        const data = await ParentCategory.find();
        res.status(200).json({message:'success', data: data});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateParentCategoryStatus = async (req, res) => {
    try{
        const data = await ParentCategory.updateOne(
            req.params,
            {
                $set:req.body
            }
        );

        res.status(200).json({message:'success', data});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteParentCategory = async (req, res) => {
    try{
        const data = await ParentCategory.deleteOne(req.params);
        res.status(200).json({message:'success', data});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    createCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory
}