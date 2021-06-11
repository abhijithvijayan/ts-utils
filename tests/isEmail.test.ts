import {isEmail} from '../source';

describe('Tests for isEmail()', () => {
  it('should return false for undefined', () => {
    expect(isEmail(undefined)).toEqual(false);
  });

  it('should return false for null', () => {
    expect(isEmail(null)).toEqual(false);
  });
});
