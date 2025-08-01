[<img src="https://app.evolv.ai/assets/images/evolv-logo-full-color-2022.png" height="75" alt="Evolv AI" />](https://evolv.ai)

[Evolv AI](https://evolv.ai) automatically discovers, personalizes, and serves progressively better journeys by continuously adapting to live user behavior.

# NextJS SDK
SDK for embedding Evolv AI into NextJS applications.

## Requirements
* React 18.0.0 or later
* NextJS 12.2.5 or later
* An environment running on [Evolv AI](https://app.evolv.ai)

## Installation
```bash
npm install @evolv/nextjs
```

## Documentation
See [https://evolv-ai.github.io/react-sdks](https://evolv-ai.github.io/react-sdks)

## API 
See [https://evolv-ai.github.io/react-sdks/api/modules/evolv_nextjs](https://evolv-ai.github.io/react-sdks/api/modules/evolv_nextjs)

## TypeScript
This package includes type definitions.

## Debugging
Enhanced debug messages can be activated by setting the `DEBUG` environment variable when running an application that uses the SDK.
See the [debug](https://www.npmjs.com/package/debug) library documentation for more details.

Example:
```shell
DEBUG=evolv:* npm start
```

## Classes

- [ClientAdapter](classes/ClientAdapter.md)
- [EvolvClient](classes/EvolvClient.md)
- [EvolvContext](classes/EvolvContext.md)
- [MiniPromise](classes/MiniPromise.md)

## Interfaces

- [Debugger](interfaces/Debugger.md)
- [EvolvClientOptions](interfaces/EvolvClientOptions.md)
- [EvolvOptions](interfaces/EvolvOptions.md)
- [EvolvProviderProps](interfaces/EvolvProviderProps.md)
- [EvolvServerSideProps](interfaces/EvolvServerSideProps.md)
- [LocalContext](interfaces/LocalContext.md)
- [ParticipantsApiContext](interfaces/ParticipantsApiContext.md)
- [RemoteContext](interfaces/RemoteContext.md)
- [WebRemoteContext](interfaces/WebRemoteContext.md)

## Variables

- [EvolvCoexistenceMode](variables/EvolvCoexistenceMode.md)
- [EvolvConsumer](variables/EvolvConsumer.md)
- [EvolvProvider](variables/EvolvProvider.md)

## Functions

- [debug](functions/debug.md)
- [getEvolvServerSideProps](functions/getEvolvServerSideProps.md)
- [useConfig](functions/useConfig.md)
- [useContextState](functions/useContextState.md)
- [useEvolv](functions/useEvolv.md)
- [useIsKeyActive](functions/useIsKeyActive.md)
- [useVariable](functions/useVariable.md)
