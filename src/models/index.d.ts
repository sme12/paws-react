import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Doggie {
  readonly id: string;
  readonly name?: string;
  readonly age?: string;
  readonly breed?: string;
  readonly city?: string;
  readonly image?: string;
  constructor(init: ModelInit<Doggie>);
  static copyOf(source: Doggie, mutator: (draft: MutableModel<Doggie>) => MutableModel<Doggie> | void): Doggie;
}