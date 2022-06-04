# evolv-flow
Utils for front end DOM manipulation.

## Getting started

To use evolv-flow in an integration, install the package.
```bash
npm i @evolv-delivery-tools/flow
```
The, import it in your integration's code.

```ts
import { waitQuery } from '@evolv-delivery-tools/flow';
waitQuery(".my-element", (element) => {
  element.innerHTML = "Hello world!";
});
```

## Usage with the Evolv editor
To use evolv-flow in an experiment, add the package on the evolvEditor using the project configuration:

File > Project Settings > Dependencies > Add Dependency.

Add @evolv-delivery-tools/flow as an NPM module and set the alias to `flow`.

Then, use it in any of your experiment's variants.

```js
flow.waitQuery(".my-element", function(element) {
  element.innerHTML = "Hello world!";
});
```

[More info about evolv-editor](https://www.youtube.com/watch?v=kETvycIR4bU&list=PL3DQ_QsZH-F6dUgzJxE-sPApJalCLomY0&ab_channel=EvolvAI)

----------

From now on, the docs will use ES6 for the examples. Rember to use ES5 in the experiments.

# Usage

## waitQuery
Wait for an element to be present in the DOM. **This function will run only once.**

> waitQuery(selector, callback(element))

```ts
import { waitQuery } from '@evolv-delivery-tools/flow';

waitQuery('#my-popup-form .cta', (element) => {
  element.innerHTML = 'Click me!';
});
```

## waitQueryAll

Loos for elements to be present in the DOM. If a new element that matches the selector is found, the callback will be called with the added elements and all the elements that match the selector.

> waitQueryAll(selector, callback(newElements, allElements))

This method could be usefull with infinite scrolls.

```ts
import { waitQueryAll } from '@evolv-delivery-tools/flow';

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
import { getElement } from '@evolv-delivery-tools/flow';

const element = getElement("#selector");
if(element) {
  element.innerHTML = "Hello world!";
}
```

You can pass a container to search in.

```ts
import { waitQuery, getElement } from '@evolv-delivery-tools/flow';

waitQuery('#my-popup-form', (container) => {
  const element = getElement("button[type='submit']", container);
  if(element) {
    element.innerHTML = "Click me!";
  }
});
```
Or
```ts
const container = getElement("#some-container");

if(container) {
  const innerElement = getElement("button", container);
}
```

## getElementAll

Similar to getElement, but returns all the elements that match the query in an array.

```ts
getElementAll(query: string, container?: Element): Element[]
```
```ts
import { getElementAll } from '@evolv-delivery-tools/flow';

const rows = getElementAll("ul.list li");
rows.forEach((row) => {
  row.innerHTML = "Hello world!";
});
```

## listenEvent

Listen for an event and filter by a selector. This method will not attach a listener to that element, insead, it will attach a listener to the document and check if the target element matches the selector.

```ts
listenEvent = (event: keyof HTMLElementEventMap, selector: string, callback: (event: Event) => void, options?: { once?: boolean, continer?: Element })
```

Example:

```ts
import { listenEvent } from '@evolv-delivery-tools/flow';
listenEvent('click', '#my-popup-form .cta', (event) => {
  event.preventDefault();
  console.log('Clicked!');
});
```

Options:
- once: if true, the callback will be called only once.
- continer: if you want to listen inside a specific element.

```ts
import { waitQuery, listenEvent } from '@evolv-delivery-tools/flow';

waitQuery('#my-popup', (formEl) => {
  listenEvent('click', '.cta', (e) => {
    e.preventDefault();
    console.log('Clicked!');
  }, { continer: formEl, once: true });
});
```

## matchUrl

Test if the current url matches a regex.

```ts
matchUrl(regex: RegExp): boolean
```

```ts
import { matchUrl } from '@evolv-delivery-tools/flow';

matchUrl(/checkout/, () => {
  console.log('Checkout page!');
});
```

## onDomChange

Triggers a callback whenever the DOM changes.

```ts
onDomChange = (callback: () => void, container?: Element) => void
```

```ts
import { onDomChange } from '@evolv-delivery-tools/flow';

onDomChange(() => {
  console.log('DOM changed!');
});
```

You can pass a custom element to be observed.
If an element is not passed, it will suscribe to the global listener.

```ts
import { onDomChange, getElement } from '@evolv-delivery-tools/flow';

waitQuery('#my-container', (containerEl) => {
  onDomChange(() => {
    console.log('DOM changed!');
  }, containerEl);
});
```

## createObserver

Creates an observer

```ts
createObserver = (
  element: Element,
  callback: () => void,
  options?: MutationObserverInit) => MutationObserver
```

```ts
import { waitQuery, createObserver } from '@evolv-delivery-tools/flow';

waitQuery('#popup-form', (myFormEl) => {
  createObserver(myFormEl, () => {
    console.log('DOM changed!');
  });
})
```

You can pass custom options to the observer

```ts
import { waitQuery, createObserver } from '@evolv-delivery-tools/flow';

waitQuery('#an-input', (myFormEl) => {
  createObserver(myFormEl, () => {
    console.log('attribute changed!');
  });
}, {
  childlist: false,
  attributes: true,
})
```

## setContext
An util for setting an evolv context variable.

```ts
setContext = (key: string, value: string) => void
```

```ts
import { setContext } from '@evolv-delivery-tools/flow';

setContext('my-key', 'my-value');
```
