const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'mytestdb',
    user : 'myuser',
    password : 'mypass',
})

connection.query(
    `
    `,
    function(err, results){

    }
)