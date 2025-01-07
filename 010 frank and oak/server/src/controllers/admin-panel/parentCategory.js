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

module.exports = {
    createCategory
}