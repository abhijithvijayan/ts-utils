import {isEmpty} from '../source';

describe('Tests for isEmpty()', () => {
  it('should return true for empty array', () => {
    expect(isEmpty([])).toEqual(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toEqual(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toEqual(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2])).toEqual(false);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({a: 1, b: 2})).toEqual(false);
  });

  it('should return false for non-empty string', () => {
    expect(isEmpty('text')).toEqual(false);
  });

  it('should return true for non-collection type(number)', () => {
    expect(isEmpty(123)).toEqual(true);
  });

  it('should return true for non-collection type(boolean)', () => {
    expect(isEmpty(true)).toEqual(true);
  });
});
