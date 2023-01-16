import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLightQLBackend = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LightQLBackend, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLightQLBackend = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LightQLBackend, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LightQLBackend = LazyLoading extends LazyLoadingDisabled ? EagerLightQLBackend : LazyLightQLBackend

export declare const LightQLBackend: (new (init: ModelInit<LightQLBackend>) => LightQLBackend) & {
  copyOf(source: LightQLBackend, mutator: (draft: MutableModel<LightQLBackend>) => MutableModel<LightQLBackend> | void): LightQLBackend;
}