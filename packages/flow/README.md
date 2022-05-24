# evolv-flow
Utils for front end DOM manipulation.

## Getting started
To use evolv-flow in an experiment, add the package on the evolvEditor using the project configuration. You can set the alias to `flow`
Then, use it in any of your experiment's variants.

```js
flow.waitQuery(".my-element", function(element) {
  element.innerHTML = "Hello world!";
})
```

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

From now on, the docs will use ES6 for the examples. Rember to use ES5 in the experiments.

----------

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

### waitQueryAll(selector, callback(newElements, allElements))

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
waitQueryAll('.confirm-checkout .cta', (newElements), => {
  const checkoutConfirm = newElements[0];
  checkoutConfirm.innerHTML = 'Click me!';
})
```

If .confirm-checkout is an element that gets distroyed and created again, the callback will be called each time it appears.

## Pending docs
- listenEvent
- matchUrl
- onDomChange
- createObserver
- getElement
- getElementAll
- setContext