const entry = require('../models/entry.model');

const getEntries = async (req, res) => {
    let entries;
    if (req.query.title) {
        entries = await entry.getEntryByTitle(req.query.title);
    }
    else {
        entries = await entry.getEntries();
    }
    res.status(200).json(entries);
}

module.exports() = getEntries