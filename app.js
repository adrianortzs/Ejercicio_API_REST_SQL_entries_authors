const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const authorRoutes = require("./routes/author.routes")
const entriesRoutes = require("./routes/entries.routes")

app.use('/author',authorRoutes);
app.use('/entries',entriesRoutes);

app.get('/', (req, res) => {
    res.send('Inicio')
})

app.use('*',error404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});