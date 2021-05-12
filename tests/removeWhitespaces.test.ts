import {removeWhitespaces} from '../source';

describe('Tests for removeWhitespaces()', () => {
  it('should return empty string for undefined', () => {
    expect(removeWhitespaces(undefined)).toEqual('');
  });

  it('should return empty string for null', () => {
    expect(removeWhitespaces(null)).toEqual('');
  });

  it('should return empty string', () => {
    expect(removeWhitespaces(' ')).toEqual('');
  });

  it('should return string without white-spaces', () => {
    expect(removeWhitespaces(' a b    c d e   f g   ')).toEqual('abcdefg');
  });

  it('should return string without any changes', () => {
    expect(removeWhitespaces('Test')).toEqual('Test');
  });
});
