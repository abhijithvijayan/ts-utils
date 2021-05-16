import {splitArrayIntoChunks} from '../source';

describe('Tests for splitArrayIntoChunks()', () => {
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
