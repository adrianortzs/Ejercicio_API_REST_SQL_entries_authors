const author = require('../models/author.model');

const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await author.getAuthors();
    }
    res.status(200).json(authors);
}

module.exports() = getAuthors