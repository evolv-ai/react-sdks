import React from "react"
import * as ReactIs from "react-is";

import {  useVariable } from "../hooks/useVariable"
import { EvolvContextInterface } from "@types";

export interface VariableProps {
  /** Name of the variable you want to select. */
  name: string
  /** Object used to render the variants. */
  variants: {
    [key: string]: any
  }
  /** Optional: you can pass the experiment data in case you don't use the context provider. */
  experiment?: EvolvContextInterface
}

export const Variable = ({
  name,
  children,
  variants,
  experiment
  }: React.PropsWithChildren<VariableProps>) => {
  const variableData = useVariable(name, experiment)
  
  if (
    !variableData.exists ||
    variableData.activeVariant === 'control' ||
    !variants[variableData.activeVariant]
  ) {
    return children
  }
  const toRender = variants[variableData.activeVariant]

  if(ReactIs.isValidElementType(toRender)) {
    const ComponentToRender = toRender as React.ComponentType
    return <ComponentToRender />
  }
  return toRender
}