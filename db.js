const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hostaway-mabaat'
});

module.exports = pool.promise();