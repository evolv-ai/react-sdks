# Class: EvolvContext

## Constructors

### Constructor

> **new EvolvContext**(): `EvolvContext`

#### Returns

`EvolvContext`

## Properties

### localContext

> **localContext**: [`LocalContext`](../interfaces/LocalContext.md)

***

### remoteContext

> **remoteContext**: [`RemoteContext`](../interfaces/RemoteContext.md) \| [`WebRemoteContext`](../interfaces/WebRemoteContext.md)

***

### uid

> **uid**: `string`

## Methods

### contains()

> **contains**(`key`): `boolean`

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`key`): `T`

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

#### Returns

`T`

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

### pushToArray()

> **pushToArray**(`key`, `value`, `local?`, `limit?`): `boolean`

#### Parameters

##### key

`string`

##### value

`any`

##### local?

`boolean`

##### limit?

`number`

#### Returns

`boolean`

***

### remove()

> **remove**(`key`): `boolean`

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### resolve()

> **resolve**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

***

### set()

> **set**(`key`, `value`, `local?`): `boolean`

#### Parameters

##### key

`string`

##### value

`any`

##### local?

`boolean`

#### Returns

`boolean`

***

### update()

> **update**(`updates`, `local?`): `void`

#### Parameters

##### updates

`Record`\<`string`, `any`\>

##### local?

`boolean`

#### Returns

`void`
