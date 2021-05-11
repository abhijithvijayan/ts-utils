import {isFunction} from '../source';

describe('Tests for isFunction()', () => {
  it('should return true for isFunction', () => {
    expect(isFunction(isFunction)).toEqual(true);
  });

  it('should return true for empty unnamed function', () => {
    expect(isFunction(function () {})).toEqual(true);
  });

  it('should return true for arrow function', () => {
    expect(isFunction(() => {})).toEqual(true);
  });

  it('should return true for async function', () => {
    expect(isFunction(async function asyncFunction() {})).toEqual(true);
  });

  it('should return true for Array', () => {
    expect(isFunction(Array)).toEqual(true);
  });

  it('should return true for Date', () => {
    expect(isFunction(Date)).toEqual(true);
  });

  it('should return true for Object', () => {
    expect(isFunction(Object)).toEqual(true);
  });

  it('should return true for Number', () => {
    expect(isFunction(Number)).toEqual(true);
  });

  it('should return true for String', () => {
    expect(isFunction(String)).toEqual(true);
  });

  it('should return true for Symbol', () => {
    expect(isFunction(Symbol)).toEqual(true);
  });

  it('should return false for empty object', () => {
    expect(isFunction({})).toEqual(false);
  });

  it('should return false for empty array', () => {
    expect(isFunction([])).toEqual(false);
  });

  it('should return false for "function" keyword', () => {
    expect(isFunction('function')).toEqual(false);
  });

  it('should return false for false value', () => {
    expect(isFunction(false)).toEqual(false);
  });
});
