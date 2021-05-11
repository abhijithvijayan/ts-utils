export type AnyFunction = (...args: unknown[]) => unknown;
export type AnyObject = Record<string, unknown>;

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
  value: T | null | undefined
): value is null | undefined {
  return isUndefined(value) || isNull(value);
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
  return isNull(value) || !(Object.keys(value) || value).length;
}

/**
 *  Remove all whitespaces from a string
 *
 *  @param str
 */
export function removeWhitespaces(str: string): string {
  return str.replace(/\s/g, '');
}

/**
 *  Removes all duplicate words from string
 */
export function removeDuplicatesFromString(str: string): string {
  return unique(str.split(' ')).join(' ');
}

/**
 *  Capitalizes the first letter of a string
 *
 *  @param str
 *  @param lowerRest, if true, lower-cases the rest of the string
 *
 *  eg: capitalize("fooBar", true); // 'Foobar'
 */
export function capitalize(str?: string | null, lowerRest = false): string {
  if (isNullOrUndefined(str)) {
    return '';
  }

  return (
    str.slice(0, 1).toUpperCase() +
    (lowerRest ? str.slice(1).toLowerCase() : str.slice(1))
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
      ?.join('') ?? '';

  return s.slice(0, 1).toLowerCase() + s.slice(1);
}

/**
 *  Generates a random string
 */
export function randomString(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 *  Returns a random number in the specified range
 *
 *  @param min
 *  @param max
 */
export function randomNumberInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 *  Returns a random integer in the specified range
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
export function round(num: number, decimals = 0): number {
  return Number(`${Math.round(Number(`${num}e${decimals}`))}e-${decimals}`);
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
export function mask(value: number | string, num = 4, maskWith = '*'): string {
  const str = String(value);

  return str.slice(-num).padStart(str.length, maskWith);
}

/**
 *  Gets the size of an array, object or string
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
export function fillArray<T>(len: number, value: T | number = 0): T[] {
  return Array(len).fill(value);
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
 *  Returns an array with n elements removed from the beginning
 *
 *  @param arr
 *  @param n
 */
export function take<T>(arr: T[], n = 1): T[] {
  return arr.slice(0, n);
}

/**
 *  Returns the last element in an array
 *
 *  @param arr
 */
export function last<T>(arr: T[]): T {
  return arr[size(arr) - 1];
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
export function splitArrayIntoChunks<T>(arr: T[], limit: number): T[][] {
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
export function get(
  from: AnyObject,
  selector: string,
  defaultValue: unknown = undefined
): unknown {
  return (
    selector
      .replace(/\[([^[\]]*)]/g, '.$1.')
      .split('.')
      .filter((t) => t !== '')
      .reduce<any>((prev, curr) => prev && prev[curr], from) || defaultValue
  );
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
 *  Returns a query string generated from the key-value pairs of the given object
 *
 *  @param queryParameters
 */
export function objectToQueryString(
  queryParameters: AnyObject | undefined | null
): string {
  return queryParameters
    ? Object.entries(queryParameters).reduce<string>((acc, [key, value]) => {
        const symbol = acc.length === 0 ? '?' : '&';
        acc += value ? `${symbol}${key}=${value}` : '';

        return acc;
      }, '')
    : '';
}

/**
 *  Determines if the current runtime environment is a browser
 */
export function isBrowser(): boolean {
  return ![typeof window, typeof document].includes('undefined');
}
