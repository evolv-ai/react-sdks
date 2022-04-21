import React, { useContext } from "react"
import { EvolvContextInterface, variableDataInterface } from "@types";
import { EvolvContext } from "../components/EvolvContext"

// const getVariableData = (variableName: string, evolvContext: EvolvContextInterface): variableDataInterface => {
//   const variable = evolvContext.variables[variableName];
//   if(typeof variable === 'undefined') {
//     console.warn(`EVOLV WARN: The variable "${variableName}" doesn\'t exist.`)
//     return {
//       exists: false,
//       activeVariant: null,
//       is: {
//         control: true
//       }
//     }
//   }
//   return {
//     exists: true,
//     activeVariant: variable,
//     is: {
//       [variable]: true,
//     }
//   }
// }

const getVariableData = (groupName: string, variableName: string, evolvContext: EvolvContextInterface, control: any) => {
  const { client } = evolvContext;
  if(!client) return control;
  const groups = client.getGroups();
  const group = groups[groupName];
  if(!group) return control;
  const variable = group[variableName];
  if(typeof variable === 'undefined') {
    return control;
  }
  return variable;
}

export function useVariable<T = any>(variableName: string, control: T): T {
  const splitted = variableName.split('.');
  const groupName: string = splitted[0];
  const variableRealName: string = splitted[1];

  const evolvContext: EvolvContextInterface = useContext(EvolvContext);
  const variable = getVariableData(groupName, variableRealName, evolvContext, control)
  return variable;
}