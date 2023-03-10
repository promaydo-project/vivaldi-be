const express = require('express')
const Route = express.Router()

const catController = require('../controllers/category')

Route
    .get('/:categoryid', catController.categoryById)
    .get('/', catController.getCategory)
    .post('/', catController.addCategory)
    .delete('/:categoryid', catController.deleteCategory)

module.exports = Route;