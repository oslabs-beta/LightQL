import path from 'path';
import express, { Request, Response, NextFunction, response } from 'express';
import type { ErrorRequestHandler } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphQLSchemas';

const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

interface ErrObject {
  log: string;
  status: number;
  message: { err: string };
};

// unknown route handler:
app.use((req: Request, res: Response) => res.status(404).send('Cannot get route'));

// global error handler:
app.use((err: ErrObject, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


//have the server running up on the 3000
app.listen(PORT, () => console.log(`Express GraphQL server now running on localhost:${PORT}/graphql`));

// changes made during ts transition
  // expressGraphQL is imported from graphqlHTTP now
  // replaced require statements with import statements
  // unnecessary types and files are removed
  // type annotations added for functional parametes and variables when necessary