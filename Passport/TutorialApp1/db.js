const sequelize = require("sequelize");

const db = new sequelize("userdb", "userdb", "userdb", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    min: 0,
    max: 5,
  },
});

const Users = db.define("users", {
  username: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  firstname: {
    type: sequelize.STRING,
  },
  lastname: {
    type: sequelize.STRING,
  },
});

db.sync().then(function() {
    console.log('Database is synchronized.....');
}).catch(() => {
    console.log('Error connecting to database.....');
})

exports = module.exports = { Users };
