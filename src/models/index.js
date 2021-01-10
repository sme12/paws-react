// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Shelter, Doggie } = initSchema(schema);

export {
  Shelter,
  Doggie
};