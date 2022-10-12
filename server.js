const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const db = require('./config/connection');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Port listening on http://localhost:3001`)
    })
})