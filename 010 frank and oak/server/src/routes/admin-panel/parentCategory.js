const express = require('express');
const { createCategory } = require('../../controllers/controllers');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/insert-category', createCategory);

module.exports = parentCategoryRouter;