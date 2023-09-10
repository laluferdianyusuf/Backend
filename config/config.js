require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_URL } = process.env;

const db = new Sequelize(DB_URL, {
  define: {
    timestamp: false,
  },
});

module.exports = {
  db,
  // development: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.PASSWORD,
  //   database: process.env.DB_NAME,
  //   dialect: "postgres",
  // },
  // test: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.PASSWORD,
  //   database: process.env.DB_NAME,
  //   dialect: "postgres",
  // },
  // production: {
  //   username: process.env.DB_USERNAME,
  //   password: process.env.PASSWORD,
  //   database: process.env.DB_NAME,
  //   dialect: "postgres",
  // },
};
