import {splitArrayIntoChunks} from '../source';

describe('Tests for splitArrayIntoChunks()', () => {
  it('should return empty array for undefined', () => {
    expect(splitArrayIntoChunks(undefined, 1)).toEqual([]);
  });

  it('should return empty array for null', () => {
    expect(splitArrayIntoChunks(null, 2)).toEqual([]);
  });

  it('should return split array of size 1 for invalid limit', () => {
    expect(splitArrayIntoChunks([1, 2, 3], null)).toEqual([[1, 2, 3]]);
  });

  it('should return empty array for empty array', () => {
    expect(splitArrayIntoChunks([], 3)).toEqual([]);
  });

  it('should split array into sizes of 2', () => {
    expect(splitArrayIntoChunks([0, 1, 2, 3, 4], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4],
    ]);
  });

  it('should return empty array', () => {
    expect(splitArrayIntoChunks([0, 1, 2, 3, 4], 0)).toEqual([]);
  });
});
