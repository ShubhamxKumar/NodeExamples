const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'mytestdb',
    user : 'myuser',
    password : 'mypass',
})
// we are not using admin user, instead we are using another user that I created with the following credentials.
// A convention to follow is that to write sql commands words in capital, and everything other in small
connection.query(
    `CREATE TABLE IF NOT EXISTS person(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL
    )`,
    function(err, results){
        if(err){
            console.error(err);
        }
        console.log('Table created successfully!!');
        connection.close();
        // we should always close the connection so to avoid memory leaks.
    }
)