import {isNullOrUndefined} from '../source';

describe('Tests for isNullOrUndefined()', () => {
  it('should return true with null', () => {
    expect(isNullOrUndefined(null)).toEqual(true);
  });

  it('should return true with undefined', () => {
    expect(isNullOrUndefined(undefined)).toEqual(true);
  });

  it('should return false with number', () => {
    expect(isNullOrUndefined(10)).toEqual(false);
  });
});
