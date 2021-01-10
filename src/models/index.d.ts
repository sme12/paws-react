import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Shelter {
  readonly id: string;
  readonly name?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly vk?: string;
  readonly facebook?: string;
  readonly instagram?: string;
  readonly city?: number;
  constructor(init: ModelInit<Shelter>);
  static copyOf(source: Shelter, mutator: (draft: MutableModel<Shelter>) => MutableModel<Shelter> | void): Shelter;
}

export declare class Doggie {
  readonly id: string;
  readonly name?: string;
  readonly age?: number;
  readonly breed?: number;
  readonly city?: number;
  readonly sex?: number;
  readonly image?: string;
  readonly description?: string;
  readonly shelter?: Shelter;
  constructor(init: ModelInit<Doggie>);
  static copyOf(source: Doggie, mutator: (draft: MutableModel<Doggie>) => MutableModel<Doggie> | void): Doggie;
}