const express = require('express');
const entriesController = require("../controllers/entries.controller");
const entriesRouter = express.Router();

entriesRouter.get('/', entriesController.getEntries);
entriesRouter.put('/', entriesController.getEntries)
entriesRouter.delete('/', entriesController.getEntries)

module.exports = entriesRouter;