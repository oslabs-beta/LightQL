import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const PG_URI = 'postgres://hggnmyxh:yvicl-nyG6v9XTeNAEr5mJzaoCbfIn98@peanut.db.elephantsql.com/hggnmyxh';
const uri = process.env.PG_URI || PG_URI;

const pool = new Pool({
  connectionString: uri,
});

const query = async (text: string, params?: any[]): Promise<QueryResult<any>> => {
  console.log('executed query', text);
  return await pool.query(text, params);
};

export default {
  query,
};


// changes made in ts transition:
  // Use import syntax to import pg and dotenv.
  // Add type annotations for the query function parameters and return type.
  // Use the async/await syntax for the query function.
  // Export the query function as the default export.