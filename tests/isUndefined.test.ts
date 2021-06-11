import {isUndefined} from '../source';

describe('Tests for isUndefined()', () => {
  it('should return true with undefined', () => {
    expect(isUndefined(undefined)).toEqual(true);
  });

  it('should return false with null', () => {
    expect(isUndefined(null)).toEqual(false);
  });

  it('should return false with number', () => {
    expect(isUndefined(10)).toEqual(false);
  });
});
