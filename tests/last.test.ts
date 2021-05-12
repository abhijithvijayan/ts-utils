import {last} from '../source';

describe('Tests for last()', () => {
  it('should return last element of array', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });

  it('should return undefined for empty array', () => {
    expect(last([])).toEqual(undefined);
  });

  it('should return null for [null]', () => {
    expect(last([null])).toEqual(null);
  });

  it('should return undefined for undefined', () => {
    expect(last(undefined)).toEqual(undefined);
  });
});
