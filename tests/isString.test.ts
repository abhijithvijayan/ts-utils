import {isString} from '../source';

describe('Tests for isString()', () => {
  it('should return true with empty string', () => {
    expect(isString('')).toEqual(true);
  });

  it('should return false with valid string', () => {
    expect(isString('helloworld')).toEqual(true);
  });

  it('should return false with number', () => {
    expect(isString(10)).toEqual(false);
  });
});
