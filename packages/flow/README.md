# evolv-flow
Utils for front end DOM manipulation.

## Getting started

To use evolv-flow in an integration, install the package.
```bash
npm i @evolv-ai/flow
```
The, import it in your integration's code.

```ts
import { waitQuery } from "@evolv/flow";
waitQuery(".my-element", (element) => {
  element.innerHTML = "Hello world!";
});
```

## Usage with the Evolv editor
To use evolv-flow in an experiment, add the package on the evolvEditor using the project configuration:

File > Project Settings > Dependencies > Add Dependency.

Add @evolv-ai/flow as an NPM module and set the alias to `flow`.

Then, use it in any of your experiment's variants.

```js
flow.waitQuery(".my-element", function(element) {
  element.innerHTML = "Hello world!";
});
```

[More info about evolv-editor](https://www.youtube.com/watch?v=kETvycIR4bU&list=PL3DQ_QsZH-F6dUgzJxE-sPApJalCLomY0&ab_channel=EvolvAI)

----------

From now on, the docs will use ES6 for the examples. Rember to use ES5 in the experiments.

## Usage

### waitQuery
Wait for an element to be present in the DOM. **This function will run only once.**

> waitQuery(selector, callback(element))

```ts
import { waitQuery } from '@evolv-ai/flow';

waitQuery('#my-popup-form .cta', (element) => {
  element.innerHTML = 'Click me!';
});
```

### waitQueryAll

Loos for elements to be present in the DOM. If a new element that matches the selector is found, the callback will be called with the added elements and all the elements that match the selector.

> waitQueryAll(selector, callback(newElements, allElements))

This method could be usefull with infinite scrolls.

```ts
import { waitQueryAll } from '@evolv-ai/flow';

waitQueryAll('.infinite-scroll-container .item', (newElements, allElements) => {
  newElements.forEach((element) => {
    element.innerHTML = 'Hello world!';
  });
});
```

Also, an element that reappears on the page

```ts
waitQueryAll('.confirm-checkout .cta', (newElements) => {
  const checkoutConfirm = newElements[0];
  checkoutConfirm.innerHTML = 'Click me!';
});
```

If .confirm-checkout is an element that gets distroyed and created again, the callback will be called each time it appears.

## getElement

Search for an element in the DOM.

```ts
getElement(query: string, container?: Element): Element | null
```

```ts
import { getElement } from '@evolv/flow';

const element = getElement("#selector");
if(element) {
  element.innerHTML = "Hello world!";
}
```

You can pass a container to search in.

```ts
import { waitQuery, getElement } from '@evolv/flow';

waitQuery('#my-popup-form', (container) => {
  const element = getElement("button[type='submit']", container);
  if(element) {
    element.innerHTML = "Click me!";
  }
});
```

If the container is null, the function will not throw an error.

```ts
const container = getElement("#non-existent-container");
const innerElement = getElement("button", container);

console.log(container, innerElement)
// null, null
```

## getElementAll

Similar to getElement, but returns all the elements that match the query in an array.

```ts
getElementAll(query: string, container?: Element): Element[]
```
```ts
import { getElementAll } from '@evolv/flow';

const rows = getElementAll("ul.list li");
rows.forEach((row) => {
  row.innerHTML = "Hello world!";
});
```

## Pending docs
- listenEvent
- matchUrl
- onDomChange
- createObserver
- setContext