import {fillArray} from '../source';

describe('Tests for fillArray()', () => {
  it('should return array with null values', () => {
    expect(fillArray(1, null)).toEqual([null]);
  });

  it('should return array with undefined values', () => {
    expect(fillArray(2, undefined)).toEqual([undefined, undefined]);
  });

  it('should return array for optional value', () => {
    expect(fillArray(3)).toEqual([undefined, undefined, undefined]);
  });

  it('should return empty array for invalid size', () => {
    expect(fillArray(undefined, undefined)).toEqual([]);
  });

  it('should return array with integer values', () => {
    expect(fillArray(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });

  it('should return array with empty object', () => {
    expect(fillArray(3, {})).toEqual([{}, {}, {}]);
  });

  it('should return empty array', () => {
    expect(fillArray(0)).toEqual([]);
  });
});
