//please refer to the sidenotes.txt file in here.....

const sequelize = require('sequelize');

const db = new sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min:0,
        max: 5,
    }
})

const User = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: sequelize.STRING,
        allowNull:false,
    }
})

const Product = db.define('product', {
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    manufacturer: {
        type:sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0,
    }
})

db.sync().then(function(){
    console.log('DataBase is synchronized....');
}).catch(function(err){
    console.log('Could not connect to the database....');
})

exports = module.exports = {
    User, Product,
}