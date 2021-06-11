export type AnyFunction = (...args: any[]) => any;
export type NullOrUndefined = null | undefined;
export type AnyObject = Record<string, any>;
export const EMPTY_STRING = '';

/**
 *  RFC2822 Validation
 *
 *  https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1
 */
export const EMAIL_REGEX =
  /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

/**
 *  Checks if the passed value is null
 *
 *  @param value
 *  @returns true if value is null, false otherwise
 */
export function isNull<T>(value: T | null): value is null {
  return value === null;
}

/**
 *  Checks if the passed value is undefined
 *
 *  @param value
 *  @returns true if value is undefined, false otherwise
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
  return typeof value === 'undefined';
}

/**
 *  Checks if the passed value is null or undefined
 *
 *  @param value
 *  @returns true if value is null or undefined, false otherwise
 */
export function isNullOrUndefined<T>(
  value: T | NullOrUndefined
): value is NullOrUndefined {
  return isNull(value) || isUndefined(value);
}

/**
 *  Checks if the passed value is a number
 *
 *  @param value
 *  @returns true if value is number, false otherwise
 */
export function isNumber<T>(value: T | number): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 *  Checks if the passed value is a string
 *
 *  @param value
 *  @returns true if value is string, false otherwise
 */
export function isString<T>(value: T | string): value is string {
  return typeof value === 'string';
}

/**
 *  Checks if passed value is a function
 *
 *  @param value
 *  @returns true if value is function, false otherwise
 */
export function isFunction<T>(value: T | Function): value is Function {
  return typeof value === 'function';
}

/**
 *  Returns true if the a value is an empty object, collection,
 *  has no enumerable properties or is any type that is not considered a collection.
 *
 *  @param value
 */
export function isEmpty<T>(value: T): boolean {
  return isNullOrUndefined(value) || !(Object.keys(value) || value).length;
}

/**
 *  Remove all whitespaces from a string
 *
 *  @param str
 */
export function removeWhitespaces(str: string | NullOrUndefined): string {
  return (str ?? EMPTY_STRING).replace(/\s/g, EMPTY_STRING);
}

/**
 *  Capitalizes the first letter of a string
 *
 *  @param str
 *  @param lowerRest, if true, lower-cases the rest of the string
 *
 *  eg: capitalize("fooBar", true); // 'Foobar'
 */
export function capitalize(
  str?: string | NullOrUndefined,
  lowerRest = false
): string {
  const validStr = str ?? EMPTY_STRING;

  return (
    validStr.slice(0, 1).toUpperCase() +
    (lowerRest ? validStr.slice(1).toLowerCase() : validStr.slice(1))
  );
}

/**
 *  Converts a string to camelcase
 *
 *  @param str
 *
 *  eg: toCamelCase("some-javascript-property"); // 'someJavascriptProperty'
 */
export function toCamelCase(str: string): string {
  const s =
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      ?.map(
        (x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()
      )
      ?.join(EMPTY_STRING) ?? EMPTY_STRING;

  return s.slice(0, 1).toLowerCase() + s.slice(1);
}

/**
 *  Generates a random string
 *
 *  This algorithm has the following weaknesses:
 *  - It will generate anywhere between 0 and 9 characters due to the fact
 *    that trailing zeros get removed when stringify-ing floating points
 */
export function randomString(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 *  Returns a random number between min (inclusive) and max (exclusive)
 *
 *  @param min
 *  @param max
 */
export function randomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 *  Returns a random integer between min (inclusive) and max (inclusive)
 *
 *  @param min
 *  @param max
 */
export function randomIntegerInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *  Rounds a number to a specified amount of digits
 *
 *  @param num
 *  @param decimals
 */
export function round(
  num: number | NullOrUndefined,
  decimals?: number | NullOrUndefined
): number {
  if (!isNumber(num)) {
    return -1;
  }

  const limit = decimals ?? 0;

  return Number(`${Math.round(Number(`${num}e${limit}`))}e-${limit}`);
}

/**
 *  Replaces all but the last num of characters with the specified mask character
 *
 *  @param value
 *  @param num
 *  @param maskWith
 *
 *  eg:
 *    mask(1234567890, 3); // '*******890'
 *    mask(1234567890, -4, "$"); // '$$$$567890'
 */
export function mask(
  value: number | string | NullOrUndefined,
  num = 4,
  maskWith = '*'
): string {
  const str = String(value ?? EMPTY_STRING);

  return str.slice(-num).padStart(str.length, maskWith);
}

/**
 *  Gets the size of an array, object, set or string
 *
 *  @param value
 */
export function size<T>(value: T | any): number {
  if (Array.isArray(value)) {
    return value.length;
  }

  if (value && typeof value === 'object') {
    return value.size || value.length || Object.keys(value).length;
  }

  if (isString(value)) {
    if (!isBrowser()) {
      // Using Buffer API for Node.js
      return Buffer.from(value).length;
    }

    return new Blob([value]).size;
  }

  return 0;
}

/**
 *  Initializes and fills an array with the specified values
 *
 *  @param len
 *  @param value
 */
export function fillArray<T>(len: number | NullOrUndefined, value?: T): T[] {
  return Array(len ?? 0).fill(value);
}

/**
 *  Returns all unique values in an array
 *
 *  @param arr
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 *  Returns an array with n elements taken from the beginning
 *
 *  @param arr
 *  @param n
 */
export function take<T>(arr: T[] | NullOrUndefined, n = 1): T[] {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.slice(0, n);
}

/**
 *  Returns the last element in an array
 *
 *  @param arr
 */
export function last<T>(arr: T[] | NullOrUndefined): T | undefined {
  return arr?.[size(arr) - 1];
}

/**
 *  Flattens an array to specified depth
 *
 *  @param arr
 *  @param depth, if passed, array will be flattened to the specified depth, else array will be flattened completely
 *
 *  eg:
 *    flatten([1, [2, [3, [4, 5], 6], 7], 8]);    // [1, 2, 3, 4, 5, 6, 7, 8]
 *    flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
 */
export function flatten(arr: unknown[], depth?: number): unknown[] {
  if (!isUndefined(depth)) {
    // Array.prototype.flat will be undefined in Nodejs < 11
    if (!isUndefined(Array.prototype.flat)) {
      return arr.flat(depth);
    }

    return arr.reduce<unknown[]>((acc, curr) => {
      return acc.concat(
        depth > 1 && Array.isArray(curr) ? flatten(curr, depth - 1) : curr
      );
    }, []);
  }

  return arr.reduce<unknown[]>((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

/**
 *  Splits array into chunks of arrays
 *
 *  @param arr
 *  @param limit
 */
export function splitArrayIntoChunks<T>(
  arr: T[] | NullOrUndefined,
  limit: number | NullOrUndefined
): T[][] {
  if (!Array.isArray(arr)) {
    return [];
  }

  if (!isNumber(limit)) {
    return [arr];
  }

  return arr.reduce<T[][]>((acc, _, index: number) => {
    if (index % limit === 0) {
      acc.push(arr.slice(index, index + limit));
    }

    return acc;
  }, []);
}

/**
 *  Performs left-to-right function composition
 *
 *  @param fns
 *
 *  eg: pipe(multiply, add); // both being individual functions
 */
export function pipe(...fns: AnyFunction[]): AnyFunction {
  return fns.reduce((f, g) => {
    return (...args): unknown => {
      return g(f(...args));
    };
  });
}

/**
 *  Retrieve a property indicated by the given selector from an object
 *
 *  @param from
 *  @param selector
 *  @param defaultValue
 *
 *  eg: get(obj, "selector.to.1.val", null); // null
 */
export function get<T, P = undefined>(
  from: T,
  selector?: string | NullOrUndefined,
  defaultValue: P | undefined = undefined
): P {
  if (isNullOrUndefined(from)) {
    return defaultValue as P;
  }

  const validSelector = selector ?? EMPTY_STRING;
  const value = validSelector
    .replace(/\[([^[\]]*)]/g, '.$1.')
    .split('.')
    .filter((t) => t !== EMPTY_STRING)
    .reduce<any>((prev, curr) => prev && prev[curr], from);

  return !isUndefined(value) ? value : defaultValue;
}

/**
 *  Creates a debounced function that delays invoking func until after
 *  wait milliseconds have elapsed since the last time the debounced function was invoked
 *
 *  @param fn: AnyFunction
 *  @param wait: number
 *
 *  wait time is waited before a function is run again
 *  Cancels the previous function calls and executes only the latest call
 */
export function debounce(fn: AnyFunction, wait = 100): AnyFunction {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function debouncedFunction(this: unknown, ...args: any[]): void {
    // if any timeout is running, cancel it
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // call the function when timed-out
      fn.apply(this, args);
      // reset timer otherwise all timers will be cleared
      timer = null;
    }, wait);
  };
}

/**
 *  Creates a throttled function that only invokes func at most once per wait milliseconds
 *
 *  if a function call is already executing, ignore the subsequent calls within wait time
 */
export function throttle(fn: AnyFunction, wait = 100): AnyFunction {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function throttledFunction(this: unknown, ...args: any[]): void {
    // if any timeout is running, skip the current call
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      // call the function when timed-out
      fn.apply(this, args);
      // reset timer otherwise all timers will be cleared
      timer = null;
    }, wait);
  };
}

/**
 *  Delays the execution of an asynchronous function
 *
 *  @param ms
 */
export function sleep(ms = 100): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 *  Performs encoding and serialization of object
 *
 *  @param params
 *  @param prefix
 */
function serialize(params: AnyObject, prefix?: string): string[] {
  return Object.entries(params).reduce<string[]>((acc, [key, value]) => {
    // remove whitespace from both sides of the key before encoding
    key = encodeURIComponent(key.trim());

    if (params.constructor === Array) {
      key = `${prefix}[]`;
    } else if (params.constructor === Object) {
      key = !prefix ? key : `${prefix}[${key}]`;
    }

    /**
     *  - undefined and NaN values will be skipped automatically
     *  - value will be empty string for functions and null
     *  - nested arrays will be flattened
     */
    if (isNull(value) || isFunction(value)) {
      acc.push(`${key}=`);
    } else if (typeof value === 'object') {
      acc = acc.concat(serialize(value, key));
    } else if (
      isNumber(value) || // this eliminates NaN
      isString(value) ||
      typeof value === 'boolean'
    ) {
      acc.push(`${key}=${encodeURIComponent(value)}`);
    }

    return acc;
  }, []);
}

/**
 *  Returns a query string generated from the key-value pairs of the given object
 *
 *  @param queryParameters
 */
export function objectToQueryParams(
  queryParameters: AnyObject | NullOrUndefined
): string {
  return queryParameters ? serialize(queryParameters).join('&') : EMPTY_STRING;
}

/**
 *  Determines if the current runtime environment is a browser
 */
export function isBrowser(): boolean {
  return ![typeof window, typeof document].includes('undefined');
}

/**
 *  strips
 *    - `/` from beginning and end of string
 *    - all flags from regex
 *  @param regex
 *  @return string
 */
const formatRegexToString = (regex: RegExp): string => {
  return new RegExp(regex, EMPTY_STRING).toString().slice(1, -1);
};

/**
 *  Check if Email is Valid
 *  @param str
 */
export function isEmail(str: string | NullOrUndefined): boolean {
  // https://regex101.com/r/857lzc/1/
  const re = new RegExp(`^(${formatRegexToString(EMAIL_REGEX)})$`);

  return !!str && re.test(str);
}
