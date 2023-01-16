// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LightQLBackend } = initSchema(schema);

export {
  LightQLBackend
};