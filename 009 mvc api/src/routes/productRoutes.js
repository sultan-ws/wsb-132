const express = require('express');
const { createProduct, readProducts, deleteProduct, updateProduct } = require('../controllers/productControllers');
const fileUpload = require('../middlewares/multer');

const productRouter = express.Router();
productRouter.use(fileUpload);

productRouter.post('/insert-product', createProduct);
productRouter.get('/read-products', readProducts);
productRouter.delete('/delete-product/:_id', deleteProduct);
productRouter.put('/update-product/:_id', updateProduct);

module.exports = productRouter;