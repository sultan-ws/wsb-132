const Product = require("../models/product");

const createProduct = async (req, res) => {
    try{
        const data = req.body;

        if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
        if(req.files.images) data.images = req.files.images.map((file)=>  file.filename);


        const finalData = new Product(data);
        const response = await finalData.save();

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

const readProducts = async (req, res) => {
    try{
        const response = await Product.find();
        const filePath = `${req.protocol}://${req.get('host')}/product-files/`
        res.status(200).json({message: 'success', data: response, filePath});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}


module.exports = {createProduct, readProducts}