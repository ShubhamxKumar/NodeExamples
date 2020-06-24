const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user:'myuser',
    password:'mypass',
});

connection.query(`SELECT * from person`, function(err, results, feilds){
    if(err){
        console.error(err);
    }
    else{
        console.log(results);
        console.log(feilds);
        // feilds has an array, it displays the information about the feilds, in this case age and name.
        connection.close();
    }
})