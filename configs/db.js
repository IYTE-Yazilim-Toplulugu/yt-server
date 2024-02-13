const mysql = require('mysql');
require('dotenv').config()

let db;
if (process.env.NODE_ENV === "development") {
    console.log("dev")
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yazilim',
        // port: 3306,
        // ssl: true
    });
}
else {
    db = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT,
        ssl: true
    });
}


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


module.exports = db;