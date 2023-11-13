const pool = require('../config/db_pgsql');
const entryQuery = require("./queries/entry.queries")

const getEntryByTitle = async (title) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(entryQuery.getEntryByTitle, [title]) //getEntry nombre de la query
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getEntries = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(entryQuery.getEntries)
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const modifyEntry = async (entry) => {
    const {title, content, date, category, name, surname, image} = entry;
    let client, result;
    try {
        client = await pool.connect(); // 
        const data = await client.query(entryQuery.modifyEntry,[title, content, date, category, name, surname, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entry = {getEntryByTitle,getEntries,modifyEntry}
module.exports() = entry
