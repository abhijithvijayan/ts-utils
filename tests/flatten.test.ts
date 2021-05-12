import {flatten} from '../source';

describe('Tests for flatten()', () => {
  it('should flatten array completely', () => {
    expect(flatten([1, [2, [3, [4, 5], 6], 7], 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  it('should flatten array to 2 levels', () => {
    expect(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)).toEqual([
      1,
      2,
      3,
      [4, 5],
      6,
      7,
      8,
    ]);
  });

  it('should return empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should return flattened array of complex array', () => {
    expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], 1)).toEqual([
      [3],
      [4],
      [5],
      9,
      9,
      8,
      [1, 2, 3],
    ]);
  });
});
