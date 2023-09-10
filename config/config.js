module.exports = {
  development: {
    username: "postgres",
    password: "aUBlAO6llwgijOa1Ypsh",
    database: "railway",
    host: "containers-us-west-140.railway.app",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "postgres",
    password: "aUBlAO6llwgijOa1Ypsh",
    database: "railway",
    host: "containers-us-west-140.railway.app",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "aUBlAO6llwgijOa1Ypsh",
    database: "railway",
    host: "containers-us-west-140.railway.app",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
