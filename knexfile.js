// Update with your config settings.
// localPbConnection = {
//   host: 'localhost',
//   database: 'Database',
//   user: process.env.DB_USERS,
//   password: process.env.DB_PASS
// }

// const prodDbConnection = process.env.DATABASE_URL || localPbConnecti

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/jokes.sqlite3'
    },
    useNullAsDefault: true,

    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },

  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/test.sqlite3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // },

  // production: {
  //   client: 'pg',
  //   connection: prodDbConnection,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // }
}
