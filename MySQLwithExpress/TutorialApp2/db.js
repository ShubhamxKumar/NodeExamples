const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user:'myuser',
    password: 'mypass',
})

function getallusers() {
    return new Promise(function (resolve, reject){
        connection.query(`SELECT * from person`,function(err, rows, cols){
            if(err){
                reject(err);
            }
            else{
                console.log('Data fetched from database OKKKKK');
                resolve(rows);
            }
        })
    })
}

function addnewperson(name, age) {
    return new Promise(function(resolve, reject){
        connection.query(`INSERT INTO person (name, age) VALUES (?, ?)`,[name, age], function(err, results){
            if(err){
                reject(err);
            }
            else{
                resolve();
                // we dont need to resolve with any results because this just adds an data.
            }
        })
    })
}
// we are using VALUES(?,?) because to avoid sql injection attacks, so that user doesnot provide a value that can 
// disrupt the database or even delete the table, thats why we provide this syntax, and then we provide an array,
// with those values, and then it will automatically place those values in the place of ? order wise.
// while this is happening 'mysql2' package make sure that the data in the array [], we provide as the second
// argument is safe to be inserted as in the data doesnot contains any values that might cause harm to the 
// database.
// order is important so provide that data as requested. 

exports = module.exports = {
    getallusers,
    addnewperson,
}

// we are not closing the database connection because as long as the express server is running i want to keep my connection open.