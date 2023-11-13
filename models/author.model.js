const pool = require('../config/db_pgsql');
const authorsQuery = require("./queries/author.queries")

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorsQuery.getAuthorByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorsQuery.getAuthors)
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const modifyAuthor = async (author) => {
    const {id_author, name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect(); // 
        const data = await client.query(authorsQuery.modifyAuthor,[id_author, name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const authors = {getAuthorByEmail,getAuthors,modifyAuthor}
module.exports() = authors
