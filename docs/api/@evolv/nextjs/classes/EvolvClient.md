# Class: EvolvClient

## Constructors

### Constructor

> **new EvolvClient**(`options`): `EvolvClient`

#### Parameters

##### options

`Partial`\<[`EvolvClientOptions`](../interfaces/EvolvClientOptions.md)\>

#### Returns

`EvolvClient`

## Properties

### context

> **context**: [`EvolvContext`](EvolvContext.md)

***

### environment

> **environment**: `string`

## Methods

### allowEvents()

> **allowEvents**(): `void`

#### Returns

`void`

***

### ~~clearActiveKeys()~~

> **clearActiveKeys**(`prefix?`): `void`

#### Parameters

##### prefix?

`string`

#### Returns

`void`

#### Deprecated

***

### confirm()

> **confirm**(): `void`

#### Returns

`void`

***

### contaminate()

> **contaminate**(`details?`, `allExperiments?`): `void`

#### Parameters

##### details?

`Record`\<`string`, `any`\>

##### allExperiments?

`boolean`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### emit()

> **emit**(`type`, `metadata?`, `flush?`): `void`

#### Parameters

##### type

`string`

##### metadata?

`Record`\<`string`, `any`\>

##### flush?

`boolean`

#### Returns

`void`

***

### flush()

> **flush**(): `void`

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`key`): `SubscribablePromise`\<`T` \| `Error`\>

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

#### Returns

`SubscribablePromise`\<`T` \| `Error`\>

***

### getActiveKeys()

> **getActiveKeys**(`prefix?`): `SubscribablePromise`\<\{ `current`: `string`[]; `previous`: `string`[]; \}\>

#### Parameters

##### prefix?

`string`

#### Returns

`SubscribablePromise`\<\{ `current`: `string`[]; `previous`: `string`[]; \}\>

***

### getConfig()

> **getConfig**(`key`): `SubscribablePromise`\<`any`\>

#### Parameters

##### key

`string`

#### Returns

`SubscribablePromise`\<`any`\>

***

### getDisplayName()

> **getDisplayName**(): `SubscribablePromise`\<`string`\>

#### Returns

`SubscribablePromise`\<`string`\>

***

### getEnvConfig()

> **getEnvConfig**(`key`): `SubscribablePromise`\<`any`\>

#### Parameters

##### key

`string`

#### Returns

`SubscribablePromise`\<`any`\>

***

### initialize()

> **initialize**(`uid`, `remoteContext?`, `localContext?`): `void`

#### Parameters

##### uid

`string`

##### remoteContext?

`Record`\<`string`, `any`\>

##### localContext?

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### isActive()

> **isActive**(`key`): `SubscribablePromise`\<`boolean`\>

#### Parameters

##### key

`string`

#### Returns

`SubscribablePromise`\<`boolean`\>

***

### off()

> **off**(`topic`, `listener`): `void`

#### Parameters

##### topic

`EventName`

##### listener

`Listener`

#### Returns

`void`

***

### on()

> **on**(`topic`, `listener`): `void`

#### Parameters

##### topic

`EventName`

##### listener

`Listener`

#### Returns

`void`

***

### once()

> **once**(`topic`, `listener`): `void`

#### Parameters

##### topic

`EventName`

##### listener

`Listener`

#### Returns

`void`

***

### preload()

> **preload**(`prefixed`, `configOnly?`, `immediate?`): `void`

#### Parameters

##### prefixed

`string`[]

##### configOnly?

`boolean`

##### immediate?

`boolean`

#### Returns

`void`

***

### reevaluateContext()

> **reevaluateContext**(): `void`

#### Returns

`void`
