const express = require('express');
const { createProduct, readProducts } = require('../controllers/productControllers');
const fileUpload = require('../middlewares/multer');

const productRouter = express.Router();
productRouter.use(fileUpload);

productRouter.post('/insert-product', createProduct);
productRouter.get('/read-products', readProducts);

module.exports = productRouter;