# services
Assorted JavaScript services.

[![NPM](https://nodei.co/npm/@haensl%2Fservices.png?downloads=true)](https://nodei.co/npm/@haensl%2Fservices/)

[![npm version](https://badge.fury.io/js/@haensl%2Fservices.svg)](http://badge.fury.io/js/@haensl%2Fservices)
[![CircleCI](https://circleci.com/gh/haensl/services.svg?style=svg)](https://circleci.com/gh/haensl/services)

## Installation<a name="installation"></a>

### Via `npm`

```bash
$ npm install -S @haensl/services
```

### Via `yarn`

```bash
$ yarn add @haensl/services
```

## Usage

1. [Install @haensl/services](#installation)

2. Use services in your code:

```javascript
import { platform } from '@haensl/services';

if (platform.hasWindow) {
  // code that relies on existance
  // of a global window object
}
```

## Available services

* [platform](#platform): Wraps information about the platform, e.g. _is there a `window`? what is the current scroll position? is there local storage? etc._
* [throttle](#throttle): Wraps functionality to throttle function execution, e.g. `debounce`.

### platform service<a name="platform"></a>

The platform service wraps information about the current runtime platform, e.g. _is there a `window`? what is the current scroll position? is there local storage? etc._

#### [Properties](#platform-properties)
* [`hasDocument`](#platform.hasDocument)
* [`hasDocumenElement`](#platform.hasDocumentElement)
* [`hasLocalStorage`](#platform.hasLocalStorage)
* [`hasSessionStorage`](#platform.hasSessionStorage)
* [`hasWindow`](#platform.hasWindow)

#### [Methods](#platform-methods)
* [`scrollPosition()`](#platform.scrollPosition)

#### Properties<a name="#platform-properties"></a>

##### hasDocument<a name="platform.hasDocument"></a>

Boolean, indicating whether or not the current runtime provides a global `document` object.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasDocument) {
  // code that relies on global document object,
  // e.g.
  if (/utf-8/i.test(document.characterSet)) {
    // do stuff that requires utf-8 encoding
  }
}
```

##### hasDocumentElement<a name="platform.hasDocumentElement"></a>

Boolean, indicating whether or not the current runtime provides a global `document.documentElement` object.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasDocumentElement) {
  // code that relies on the existence of document.documentElement,
  // e.g.
  if (!(document.documentElement instanceof HTMLHtmlElement)) {
    // do stuff the XML way, because we're not in an HTML document
  }
}
```

##### hasLocalStorage<a name="platform.hasLocalStorage"></a>

Boolean, indicating whether or not the current runtime provides a global `window.localStorage` object.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasLocalStorage) {
  // code that relies on local storage,
  // e.g.
  window.localStorage.setItem('my-data', data);
} else {
  // code that saves data elsewhere
}
```

##### hasSessionStorage<a name="platform.hasSessionStorage"></a>

Boolean, indicating whether or not the current runtime provides a global `window.sessionStorage` object.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasSessionStorage) {
  // code that relies on session storage,
  // e.g.
  window.sessionStorage.setItem('my-data', data);
} else {
  // code that saves data elsewhere
}
```

##### hasWindow<a name="platform.hasWindow"></a>

Boolean, indicating whether or not the current runtime provides a global `window` object.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasWindow) {
  // code that relies on the global window object,
  // e.g.
  myComponent.scrollX = window.scrollX + 100;
}
```

#### Methods<a name="platform-methods"></a>

##### scrollPosition()<a name="platform.scrollPosition"></a>

Returns an object with properties `x` and `y` reflecting the current scroll position if applicaple, `null` otherwise.

###### Example
```javascript
import { platform } from '@haensl/services';

if (platform.hasWindow) {
  window.addEventListener('scroll', () => {
    console.log(platform.scrollPosition());
    // will print objects like
    // { x: 0, y: 10 }
  });
} else if (!platform.hasDocument) {
  console.log(platform.scrollPosition());
  // will print null since there is neither document nor window!
}
```

### throttle service<a name="throttle"></a>

The throttle service wraps functionality used to throttle function execution, e.g. `debounce`.

##### [Methods](#throttle-methods)
* [`debounce(fn, debounceMs)`](#throttle.debounce)

#### Methods<a name="throttle-methods">

##### debounce(fn, debounceMs)<a name="throttle.debounce"></a>

Returns a new function that debounces `fn` by `debounceMs` milliseconds. Debouncing means `fn` is only executed if there are _no calls_ for `debounceMs` milliseconds.

###### Example<a name="throttle.debounce.example">
```javascript
import { throttle, platform } from '@haensl/services';

if (platform.hasWindow) {
  // only logs when there are no calls
  // for 50 milliseconds
  const onScroll = throttle.debounce(() => {
    console.log(platform.scrollPosition());
  }, 50);

  window.addEventListener('scroll', onScroll);
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

