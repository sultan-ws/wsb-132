const express = require('express');
const {
    createCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory
} = require('../../controllers/controllers');

const parentCategoryRouter = express.Router();

parentCategoryRouter.post('/insert-category', createCategory);
parentCategoryRouter.get('/read-categories', readParentCategories);
parentCategoryRouter.put('/update-status/:_id', updateParentCategoryStatus);
parentCategoryRouter.delete('/delete-category/:_id', deleteParentCategory)

module.exports = parentCategoryRouter;