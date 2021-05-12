import {fillArray} from '../source';

describe('Tests for fillArray()', () => {
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
