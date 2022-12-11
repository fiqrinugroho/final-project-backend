const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = process.env;

// process.env.development = local
// process.env.test = local (tp utk test => jadi DB nya khusus test)
// process.env.production = server => setelah di deploy

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
};
