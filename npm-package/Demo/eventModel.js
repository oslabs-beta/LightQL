const { Pool } = require('pg');
require('dotenv').config();
const uri = process.env.PG_URI;
// const PG_URI = postgres uri here => do this in dotenv)

const pool = new Pool({
  connectionString: uri,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
