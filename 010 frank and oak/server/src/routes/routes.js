const express = require('express');
const parentCategoryRouter = require('./admin-panel/parentCategory');
const multer = require('multer');

const adminPanelRouters = express.Router();
const websiteRouters = express.Router();
const appRouters = express.Router();

/* Admin Panel Routers */
adminPanelRouters.use('/parent-category', multer().none(), parentCategoryRouter);


module.exports = {
    adminPanelRouters,
    websiteRouters,
    appRouters
}