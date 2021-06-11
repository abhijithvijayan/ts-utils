import {capitalize} from '../source';
import {EMPTY_STRING} from '../source/utils';

describe('Tests for capitalize()', () => {
  it('should return empty string for undefined', () => {
    expect(capitalize(undefined)).toEqual(EMPTY_STRING);
  });

  it('should return empty string for null', () => {
    expect(capitalize(null)).toEqual(EMPTY_STRING);
  });

  it('should capitalize non-capitalized string', () => {
    expect(capitalize('test')).toEqual('Test');
  });

  it('should return capitalized string without any changes', () => {
    expect(capitalize('Test')).toEqual('Test');
  });

  it('should lowercase rest of the string', () => {
    expect(capitalize('fooBar', true)).toEqual('Foobar');
  });
});
