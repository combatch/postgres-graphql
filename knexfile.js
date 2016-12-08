const db = require('./config/config.json')[process.env.NODE_ENV || 'development'];

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: `${db.HOST}`,
      port: `${db.PORT}`,
      database: `${db.DBNAME}`,
      user: `${db.USER}`,
      password: `${db.PASSWORD}`
    },
    migrations: {
      tableName: 'knex_migrations'
    }

  },

  production: {
    client: 'postgresql',
    connection: {
      host: `${db.HOST}`,
      port: `${db.PORT}`,
      database: `${db.DBNAME}`,
      user: `${db.USER}`,
      password: `${db.PASSWORD}`
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};