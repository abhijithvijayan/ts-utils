import {mask} from '../source';
import {EMPTY_STRING} from '../source/utils';

describe('Tests for mask()', () => {
  it('should return empty string for undefined', () => {
    expect(mask(undefined)).toEqual(EMPTY_STRING);
  });

  it('should return empty string for null', () => {
    expect(mask(null)).toEqual(EMPTY_STRING);
  });

  it('should return string with last 4 characters unmasked', () => {
    expect(mask(1234567890)).toEqual('******7890');
  });

  it('should return string with last 3 characters unmasked', () => {
    expect(mask(1234567890, 3)).toEqual('*******890');
  });

  it('should return string with first 4 characters masked', () => {
    expect(mask(1234567890, -4)).toEqual('****567890');
  });

  it('should return string with $ symbol as masking character', () => {
    expect(mask(1234567890, 4, '$')).toEqual('$$$$$$7890');
  });
});
