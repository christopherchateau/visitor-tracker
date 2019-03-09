module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/visitortracker",
    migrations: {
      directory: "./migrations"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: "./migrations"
    },
    useNullAsDefault: true
  }
};
