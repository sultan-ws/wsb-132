const Product = require("../models/product");
const fs = require('fs');

const createProduct = async (req, res) => {
    try {
        const data = req.body;

        if (req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
        if (req.files.images) data.images = req.files.images.map((file) => file.filename);


        const finalData = new Product(data);
        const response = await finalData.save();

        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const readProducts = async (req, res) => {
    try {
        const response = await Product.find();
        const filePath = `${req.protocol}://${req.get('host')}/product-files/`
        res.status(200).json({ message: 'success', data: response, filePath });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findOne(req.params);

        if (!data) return res.status(404).json({ message: 'no match found' });

        if (data.thumbnail) {
            const filepath = `./src/files/${data.thumbnail}`;
            if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        }

        if (data.images) {
            data.images.map((img) => {
                const filepath = `./src/files/${img}`;
                if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
            })
        }

        const response = await Product.deleteOne(req.params);
        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateProduct = async (req, res) => {
    try {
        const newData = req.body;
        const data = await Product.findOne(req.params);

        if (!data) return res.status(404).json({ message: 'no match found' });

        if (req.files.thumbnail) {
            if (data.thumbnail) {
                const filepath = `./src/files/${data.thumbnail}`;
                if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
            }
            newData.thumbnail = req.files.thumbnail[0].filename;
        }

        if (req.files.images) {
            if (data.images) {
                data.images.map((img) => {
                    const filepath = `./src/files/${img}`;
                    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
                })
            };

            newData.images = req.files.images.map((img)=> img.filename);
        }

        const response = await Product.updateOne(
            req.params,
            { $set: newData }
        );
        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { createProduct, readProducts, deleteProduct, updateProduct }