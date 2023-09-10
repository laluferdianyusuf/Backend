const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_URL } = process.env;

const db = new Sequelize(DB_URL, {
  define: {
    timestamp: false,
  },
});

module.exports = db;
// module.exports = {
//   development: {
//     username: "postgres",
//     password: "aUBlAO6llwgijOa1Ypsh",
//     database: "railway",
//     host: "containers-us-west-140.railway.app",
//     dialect: "postgres",
//   },
//   test: {
//     username: "postgres",
//     password: "aUBlAO6llwgijOa1Ypsh",
//     database: "railway",
//     host: "containers-us-west-140.railway.app",
//     dialect: "postgres",
//   },
//   production: {
//     username: "postgres",
//     password: "aUBlAO6llwgijOa1Ypsh",
//     database: "railway",
//     host: "containers-us-west-140.railway.app",
//     dialect: "postgres",
//   },
// };
