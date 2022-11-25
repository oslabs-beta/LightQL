const { Pool } = require('pg');
require('dotenv').config();
const PG_URI = 'postgres://hggnmyxh:yvicl-nyG6v9XTeNAEr5mJzaoCbfIn98@peanut.db.elephantsql.com/hggnmyxh';
const uri = process.env.PG_URI || PG_URI;

const pool = new Pool({
  connectionString: uri,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
