const express = require("express")
const {
    getCategories,
    oneGetCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require("../controller/categories")

const router =  express.Router();

//  "/api/v1/categories"
router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(oneGetCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;