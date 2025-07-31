[<img src="https://app.evolv.ai/assets/images/evolv-logo-full-color-2022.png" height="75" alt="Evolv AI" />](https://evolv.ai)

[Evolv AI](https://evolv.ai) automatically discovers, personalizes, and serves progressively better journeys by continuously adapting to live user behavior.

# React SDKs
SDKs for embedding Evolv AI into React-based applications, such as React Web and NextJS.

## Documentation
See [https://evolv-ai.github.io/react-sdks](https://evolv-ai.github.io/react-sdks)

## API
See [https://evolv-ai.github.io/react-sdks/api](https://evolv-ai.github.io/react-sdks/api)

## Local Development
### Quick Start
```bash
cp -n .env-example .env.local

npx -y lerna bootstrap
npm start
```

> NOTE: Replace the values of `environment` in the _.env.local_ file
> if you have an environment of your own.

> If your environment belongs to stack other than `prod`, you can
> also provide an `endpoint` option to point to a different stack.
>
> ```
> NEXT_PUBLIC_EVOLV_CONFIG='{"environment":"a925240014","endpoint": "https://participants.evolv.ai"}'
> REACT_APP_EVOLV_CONFIG='{"environment":"a925240014","endpoint": "https://participants.evolv.ai"}' 
> ```

* React: [http://localhost:4001/](http://localhost:4001/)
* NextJS: [http://localhost:4002/](http://localhost:4002/)
