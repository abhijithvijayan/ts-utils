import {isNull} from '../source';

describe('Tests for isNull()', () => {
  it('should return true with null', () => {
    expect(isNull(null)).toEqual(true);
  });

  it('should return false with number', () => {
    expect(isNull(10)).toEqual(false);
  });
});
