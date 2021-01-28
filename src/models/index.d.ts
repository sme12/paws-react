import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Breed {
  MIX = "MIX"
}

export enum Age {
  PUP = "PUP",
  YOUNG = "YOUNG",
  ADULT = "ADULT",
  SENIOR = "SENIOR"
}

export enum City {
  SPB = "SPB",
  MSK = "MSK",
  EKB = "EKB"
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



export declare class Shelter {
  readonly id: string;
  readonly name?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly vk?: string;
  readonly facebook?: string;
  readonly instagram?: string;
  readonly city?: City | keyof typeof City;
  readonly Doggies?: (Doggie | null)[];
  constructor(init: ModelInit<Shelter>);
  static copyOf(source: Shelter, mutator: (draft: MutableModel<Shelter>) => MutableModel<Shelter> | void): Shelter;
}

export declare class Doggie {
  readonly id: string;
  readonly name?: string;
  readonly age?: Age | keyof typeof Age;
  readonly breed?: Breed | keyof typeof Breed;
  readonly city?: City | keyof typeof City;
  readonly image?: string;
  readonly description?: string;
  readonly shelter?: Shelter;
  readonly shelterID: string;
  readonly sex?: Sex | keyof typeof Sex;
  constructor(init: ModelInit<Doggie>);
  static copyOf(source: Doggie, mutator: (draft: MutableModel<Doggie>) => MutableModel<Doggie> | void): Doggie;
}