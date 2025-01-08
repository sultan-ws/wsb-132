/* Admin Panel Controllers */
// Parent Category
const {
    createCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory
} = require("./admin-panel/parentCategory");

module.exports = {
    createCategory,
    readParentCategories,
    updateParentCategoryStatus,
    deleteParentCategory
}