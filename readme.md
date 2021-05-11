<h1 align="center">@abhijithvijayan/ts-utils</h1>
<p align="center">Collection of JavaScript utility functions</p>
<div align="center">
  <a href="https://www.npmjs.com/package/@abhijithvijayan/ts-utils">
    <img src="https://img.shields.io/npm/v/@abhijithvijayan/ts-utils" alt="NPM" />
  </a>
  <a href="https://travis-ci.com/abhijithvijayan/ts-utils">
    <img src="https://travis-ci.com/abhijithvijayan/ts-utils.svg?branch=main" alt="Travis Build" />
  </a>
  </a>
  <a href="https://david-dm.org/abhijithvijayan/ts-utils">
    <img src="https://img.shields.io/david/abhijithvijayan/ts-utils.svg?colorB=orange" alt="DEPENDENCIES" />
  </a>
  <a href="https://github.com/abhijithvijayan/ts-utils/blob/main/license">
    <img src="https://img.shields.io/github/license/abhijithvijayan/ts-utils.svg" alt="LICENSE" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20%40abhijithvijayan%2Fts-utils%21%20by%20%40_abhijithv%0A%0ACollection%20of%20JavaScript%20utility%20functions%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fts-utils%0A%0A%23node%20%23javascript%20%23typescript%20%23utils%20%23npm">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="TWEET" />
  </a>
</div>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>
<hr />

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/ts-utils/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20%40abhijithvijayan%2Fts-utils%21%20by%20%40_abhijithv%0A%0ACollection%20of%20JavaScript%20utility%20functions%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fts-utils%0A%0A%23node%20%23javascript%20%23typescript%20%23utils%20%23npm) about it.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
- [Credits](#credits)
- [LICENSE](#license)

## Installation

Ensure you have [Node.js](https://nodejs.org) 10 or later installed. Then run the following:

```
# via npm
npm install @abhijithvijayan/ts-utils

# or yarn
yarn add @abhijithvijayan/ts-utils
```

## Usage

```js
import {isNull, get} from '@abhijithvijayan/ts-utils';
```

## API

- `isNull(value)`: Returns `true` if value is `null`, `false` otherwise
- `isUndefined(value)`: Returns `true` if value is `undefined`, `false` otherwise
- `isNullOrUndefined(value)`: Returns `true` if value is `null` or `undefined`, `false` otherwise
- `isString(value)`: Returns `true` if value is `string`, `false` otherwise
- `isNumber(value)`: Returns `true` if value is `number`, `false` otherwise
- `isFunction(value)`: Returns `true` if value is `function`, `false` otherwise
- `isEmpty(value)`: Returns `true` if the value is an `empty object`, `collection`, has `no enumerable properties` or is any type that is not considered a `collection`
	- isEmpty([]); // true
	- isEmpty({}); // true
	- isEmpty(""); // true
	- isEmpty([1, 2]); // false
	- isEmpty({ a: 1, b: 2 }); // false
	- isEmpty("text"); // false
	- isEmpty(123); // true - type is not considered a collection
	- isEmpty(true); // true - type is not considered a collection


- `size(value)`: Gets the size of an array, object, set or string
	- size([1, 2, 3, 4, 5]); // 5
	- size("size"); // 4
	- size(new Set([1, 2, 3])); // 3
	- size({ one: 1, two: 2, three: 3 }); // 3
- `splitArrayIntoChunks(arr, size)`: Splits array into chunks of arrays, Returns `array`
	- splitArrayIntoChunks([0, 1, 2, 3, 4], 2); // [[0, 1], [2, 3], [4]]
	- splitArrayIntoChunks([0, 1, 2, 3, 4], 4); // [[0, 1, 2, 3], [4]]
- `removeWhitespaces(value)`: Remove all whitespaces from a `string`
	- removeWhitespaces("-- hello - world --"); // "--hello-world--"
- `removeDuplicatesFromString(value)`: Removes all duplicate words from string
	- removeDuplicatesFromString("hello world hello world hello world"); // "hello world"
- `capitalize(value, lowerRest)`: Capitalizes the first letter of a `string`
	- `lowerRest`, if `true`, lower-cases the rest of the string, `Default: false`
	- capitalize("fooBar"); // 'FooBar'
	- capitalize("fooBar", true); // 'Foobar'
- `toCamelCase(value)`: Converts a string to camelcase
	- toCamelCase("some_text_field_name"); // 'someTextFieldName'
	- toCamelCase("Some label that needs to be camelized"); // 'someLabelThatNeedsToBeCamelized'
	- toCamelCase("some-js-property"); // 'someJsProperty'
	- toCamelCase("some-mixed_string with spaces_underscores-and-hyphens"); // 'someMixedStringWithSpacesUnderscoresAndHyphens'


- `randomString()`: Generates a random `string`
- `randomNumberInRange(min, max)`: Returns a random `number` in the specified range
	- randomNumberInRange(10, 15); // 12.257101242652775
- `randomIntegerInRange(min, max`: Returns a random `integer` in the specified range
	- randomIntegerInRange(10, 20); // 16
- `round(num, decimals)`: Rounds a number to a specified amount of digits
	- round(1.005, 2); // 1.01
- `mask(value, num, maskWith)`: Replaces all, but the last num of characters with the specified mask character
	- If `num` is negative, the unmasked characters will be at the start of the string. `Default: 4`
	- `maskWith` changes default character for the mask. `Default: *`
	- mask(1234567890); // '******7890'
	- mask(1234567890, 3); // '*******890'
	- mask(1234567890, -4, "$"); // '$$$$567890'
- `fillArray(length, value)`: Initializes and fills an array with the specified values, Returns an `array`
	- fillArray(5, 2); // [2, 2, 2, 2, 2]
	- fillArray(3, {}); // [{}, {}, {}]
- `unique(arr)`: Returns all unique values in an array
	- unique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
- `take(arr)`: Returns an array with n elements removed from the beginning
	- take([1, 2, 3], 5); // [1, 2, 3]
	- take([1, 2, 3], 0); // []
- `last(arr)`: Returns the last element in an array
	- last([1, 2, 3]); // 3
	- last([]); // undefined
	- last([null]); // null
	- last(undefined); // undefined
- `flatten(arr, depth)`: Flattens an array to specified depth, Returns `array`
	- `depth`, if passed, array will be flattened to the specified depth, else array will be flattened completely
	- flatten([1, [2, [3, [4, 5], 6], 7], 8]);    // [1, 2, 3, 4, 5, 6, 7, 8]
	- flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
- `pipe(...fns)`: Performs left-to-right function composition(synchronous)
   ```js
   const add5 = (x) => x + 5;
   const multiply = (x, y) => x * y;
   const multiplyAndAdd5 = pipe(multiply, add5);
   multiplyAndAdd5(5, 2); // 15
  ```
- `get(from, selector, defaultValue)`: Retrieve a property indicated by the given selector from an object
   ```js
   const obj = { selector: { to: { val: "val to select" } }, target: [1, 2, { a: "test" }], };

   get(obj, "selector.to.val"); //"val to select"
   get(obj, "selector.to1.val", null); // null
   get(obj, "target.2.a"); // "test"
   get(obj, "selector.to1.val"); // undefined
  ```

- `debounce(fn, wait)`: Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked
	- `wait`: Time in milliseconds `Default: 100`
   ```js
   window.addEventListener("resize", debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
   }, 250)); // Will log the window dimensions at most every 250ms
   ```
- `throttle(fn, wait)`: Creates a throttled function that only invokes `fn` at most once per `wait` milliseconds
	- `wait`: Time in milliseconds `Default: 100`
	- `sleep(ms)`: Delays the execution of an asynchronous function
	- `ms`: Time in milliseconds `Default: 100`
  ```js
  async function sleepyWork() {
   console.log("I'm going to sleep for 1 second.");
   await sleep(1000);
   console.log("I woke up after 1 second.");
  }
  ```
- `objectToQueryString(queryParams)`: Returns a query string generated from the key-value pairs of the given object
	- objectToQueryString({ page: "1", size: "2kg", key: undefined }); // '?page=1&size=2kg'
- `isBrowser()`: Determines if the current runtime environment is a browser

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/abhijithvijayan/ts-utils/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue [here](https://github.com/abhijithvijayan/ts-utils/issues/new) for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/abhijithvijayan/ts-utils/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22type%3A+bug%22)

### Linting & TypeScript Config

- Shared Eslint & Prettier Configuration - [`@abhijithvijayan/eslint-config`](https://www.npmjs.com/package/@abhijithvijayan/eslint-config)
- Shared TypeScript Configuration - [`@abhijithvijayan/tsconfig`](https://www.npmjs.com/package/@abhijithvijayan/tsconfig)

## Credits
Some utils are inherited from https://www.30secondsofcode.org/js/p/1

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
