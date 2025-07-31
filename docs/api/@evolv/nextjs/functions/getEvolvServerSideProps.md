# Function: getEvolvServerSideProps()

## Call Signature

> **getEvolvServerSideProps**(`options`): `PropsFactory`\<`Result`\>

Server-side loader function that builds out the necessary data needed to hydrate page during rendering. The
return value of this function will become the value of `props` that is passed to the page component.

### Parameters

#### options

[`EvolvOptions`](../interfaces/EvolvOptions.md)

### Returns

`PropsFactory`\<`Result`\>

### Description

If a page does not need to export its own `getServerSideProps()` function, use the shorter form shown in the first example.
If a page does need to export its own `getServerSideProps()` function, use the longer form inside the page's
`getServerSideProps()` function to merge together page props and Evolv props.

### Examples

```ts
export const getServerSideProps = getEvolvServerSideProps(options);
```

```ts
export function getServerSideProps(ctx) {
    const pageProps = {};
    const { props: evolvProps } = await getEvolvServerSideProps(options, ctx);

    return {
        props: {
            ...pageProps
            ...evolvProps
        }
    };
}
```

## Call Signature

> **getEvolvServerSideProps**(`options`, `ctx`): `Promise`\<`Result`\>

Server-side loader function that builds out the necessary data needed to hydrate page during rendering. The
return value of this function will become the value of `props` that is passed to the page component.

### Parameters

#### options

[`EvolvOptions`](../interfaces/EvolvOptions.md)

#### ctx

`GetServerSidePropsContext`

### Returns

`Promise`\<`Result`\>

### Description

If a page does not need to export its own `getServerSideProps()` function, use the shorter form shown in the first example.
If a page does need to export its own `getServerSideProps()` function, use the longer form inside the page's
`getServerSideProps()` function to merge together page props and Evolv props.

### Examples

```ts
export const getServerSideProps = getEvolvServerSideProps(options);
```

```ts
export function getServerSideProps(ctx) {
    const pageProps = {};
    const { props: evolvProps } = await getEvolvServerSideProps(options, ctx);

    return {
        props: {
            ...pageProps
            ...evolvProps
        }
    };
}
```
