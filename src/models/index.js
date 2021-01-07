// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Doggie } = initSchema(schema);

export {
  Doggie
};