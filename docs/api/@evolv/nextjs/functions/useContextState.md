# Function: useContextState()

> **useContextState**\<`T`\>(`key`): \[`T`, `Dispatch`\<`T`\>\]

Hook similar to React's useState() which returns a tuple containing a getter and setter.

## Type Parameters

### T

`T` = `any`

## Parameters

### key

`string`

Name of variable

## Returns

\[`T`, `Dispatch`\<`T`\>\]

## Description

Hook sets a value on the Evolv context and will trigger a reaction that reevaluates variables based on the new context
