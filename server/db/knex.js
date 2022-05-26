const knex = require("knex");

// Enables knex to connect to the database.
const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "database.sqlite3"
  }
});

module.exports = connectedKnex;
