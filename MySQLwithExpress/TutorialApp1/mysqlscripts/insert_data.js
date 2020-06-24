const mysql = require('mysql2');

const values = {
    name : process.argv[2],
    age : process.argv[3],
}

// process.argv is an array. And this array contains the command that we type in the terminal like
// eg: node ./mysqlscripts/insert_data.js value_1 value_2 value_3 .... 
// and the array contains the elements like this: ['node', './mysqlscripts/insert_data.js', 'value_1', 'value_2', 'value_3', ....];
// and then we access the array as shown in the code block written above.

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'mytestdb',
    user : 'myuser',
    password : 'mypass',
})

connection.query(`INSERT INTO person (name, age) VALUES ('${values.name}', ${values.age})`, function(err,results){
    if(err){
        console.error(err);
    }
    else{
        console.log('Data added successfuly...');
        connection.close();
    }
})