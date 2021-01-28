// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Breed = {
  "MIX": "MIX"
};

const Age = {
  "PUP": "PUP",
  "YOUNG": "YOUNG",
  "ADULT": "ADULT",
  "SENIOR": "SENIOR"
};

const City = {
  "SPB": "SPB",
  "MSK": "MSK",
  "EKB": "EKB"
};

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Shelter, Doggie } = initSchema(schema);

export {
  Shelter,
  Doggie,
  Breed,
  Age,
  City,
  Sex
};