require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "HeoGKj1XDRZT5aVjBfyx",
  database: "railway",
  host: "containers-us-west-109.railway.app",
  url: "postgresql://postgres:HeoGKj1XDRZT5aVjBfyx@containers-us-west-109.railway.app:6451/railway",
});

module.exports = sequelize;
