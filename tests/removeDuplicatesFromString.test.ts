import {removeDuplicatesFromString} from '../source';

describe('Tests for removeDuplicatesFromString()', () => {
  it('should return string without duplicated words', () => {
    expect(removeDuplicatesFromString('abc abcabc abc')).toEqual('abc abcabc');
  });

  it('should return string without any changes', () => {
    expect(removeDuplicatesFromString('Test')).toEqual('Test');
  });
});
