const express = require('express');
const productRouter = require('./src/routes/productRoutes');
require('dotenv').config();
require('./src/db/config');

const app = express();

app.use('/product-files', express.static('./src/files'));

app.use('/products', productRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})