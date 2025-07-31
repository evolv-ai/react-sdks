# Interface: EvolvOptions

## Properties

### client

> **client**: [`EvolvClientOptions`](EvolvClientOptions.md)

***

### localContext?

> `optional` **localContext**: `Partial`\<[`LocalContext`](LocalContext.md)\>

***

### remoteContext?

> `optional` **remoteContext**: `Partial`\<[`RemoteContext`](RemoteContext.md)\>

***

### serverSideTimeout?

> `optional` **serverSideTimeout**: `number`

Duration in milliseconds after which server-side hydration of allocated variants will be skipped, and fallback
variants will be used instead for server-side rendering. Variant allocation will still occur on the client-side
but may exhibit flash as the client replaces the values rendered by the server.

#### Default

```ts
200
```

***

### uid

> **uid**: `string`
