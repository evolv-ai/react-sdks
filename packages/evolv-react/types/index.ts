import type { EvolvClient } from "@evolv/client"

export interface EvolvContextInterface {
  client?: EvolvClient
}

export interface IEvolvGroups {
  [groupKey: string]: IEvolvVariables
}

export interface IEvolvVariables {
  [variableKey: string]: any
}

export interface variableIsType {
  [key: string]: boolean
} 

export interface variableDataInterface {
  exists: boolean
  activeVariant: string | null
  is: variableIsType
}