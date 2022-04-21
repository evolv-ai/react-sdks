export interface EvolvClientOptions {
  enviromentId: string;
  sessionId?: string;
  userId?: string;
  useSessions?: boolean;
}

export interface IExperimentOptions {
  userId?: string;
  group: string;
}

export type IAllocationsResponse = IAllocationsContext[]

export interface IAllocationsContext {
  genome: IAllocationsGroups
}

export interface IAllocationsGroups<T = any> {
  [groupKey: string]: IAllocationsVariants<T>
}

export interface IAllocationsVariants<T = any> {
  [variantKey: string]: T
}

export interface IResponseAlloctaionsVariables {
  [variableKey: string]: IResponseAllocationsVariants
}

export interface IResponseAllocationsVariants {
  [variantKey: string]: IResponseAllocationsVariant
}

export interface IResponseAllocationsVariant {
  id: string
  type: 'compound'
  _metadata: {}
  script: string
  styles: string
  timing: 'immediate' | string
  timingSelectors: any
}

