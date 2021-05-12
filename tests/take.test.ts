import {take} from '../source';

describe('Tests for take()', () => {
  it('should return 1 element taken from array', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  it('should return empty array', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});
