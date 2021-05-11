import {size} from '../source';

describe('Tests for size()', () => {
  it('should return size of array', () => {
    expect(size([1, 2, 3, 4, 5])).toEqual(5);
  });

  it('should return length of object', () => {
    expect(size({one: 1, two: 2, three: 3})).toEqual(3);
  });

  it('should return length of set', () => {
    expect(size(new Set([1, 2, 3]))).toEqual(3);
  });

  it('should return length of string', () => {
    expect(size('size')).toEqual(4);
  });
});
