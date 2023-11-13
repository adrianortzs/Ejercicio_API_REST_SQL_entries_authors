const express = require('express');
const authorController = require("../controllers/author.controller");
const authorRouter = express.Router();

authorRouter.get('/', authorController.getAuthors);
authorRouter.put('/', authorController.getAuthors)
authorRouter.delete('/', authorController.getAuthors)

module.exports = authorRouter;