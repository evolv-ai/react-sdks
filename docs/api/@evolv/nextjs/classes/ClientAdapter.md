# Class: ClientAdapter

## Constructors

### Constructor

> **new ClientAdapter**(`options`, `hydratedState?`): `ClientAdapter`

#### Parameters

##### options

[`EvolvClientOptions`](../interfaces/EvolvClientOptions.md)

##### hydratedState?

`Record`\<`string`, `any`\>

#### Returns

`ClientAdapter`

## Accessors

### client

#### Get Signature

> **get** **client**(): [`EvolvClient`](EvolvClient.md)

##### Returns

[`EvolvClient`](EvolvClient.md)

***

### hydratedState

#### Get Signature

> **get** **hydratedState**(): `Record`\<`string`, `any`\>

##### Returns

`Record`\<`string`, `any`\>

***

### isBrowser

#### Get Signature

> **get** **isBrowser**(): `boolean`

##### Returns

`boolean`

## Methods

### emit()

> **emit**(`event`): `void`

#### Parameters

##### event

`string`

#### Returns

`void`

***

### hydrate()

> **hydrate**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

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
