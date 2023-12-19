const express = require('express'); //importera express. 
const server = express(); //Utgör själva webbservern. Vanligt att den också heter app.
server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});



server.get('/users', (req, res) => {
    const sqlite3 = require("sqlite3").verbose()
    const sql = `SELECT * FROM users`
    db = new sqlite3.Database("./gik339-labb2.db");
    db.all('SELECT * FROM USERS', (err, rows) => {
    if (err) {
        console.error(err.message);
        return res.status(500).send(err.message);
    }
    
    res.send(rows);

})
});
server.listen(3000, () => { //Startar webbserver. Funktionen listen som berättar att servern ska lyssna efter anrop på port 3000.
    console.log('Server running on http://localhost:3000');
});

