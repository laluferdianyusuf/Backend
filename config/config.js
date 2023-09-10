require("dotenv").config();
const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DB_URL, {
  define: {
    timestamp: false,
  },
});
module.exports = {
  db,
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
  },
};
