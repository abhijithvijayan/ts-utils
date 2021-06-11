import {toCamelCase} from '../source';
import {EMPTY_STRING} from '../source/utils';

describe('Tests for toCamelCase()', () => {
  it('should return empty string for undefined', () => {
    expect(toCamelCase(undefined)).toEqual(EMPTY_STRING);
  });

  it('should return empty string for null', () => {
    expect(toCamelCase(null)).toEqual(EMPTY_STRING);
  });

  it('should return camel-cased string for text with spaces', () => {
    expect(toCamelCase('Some label that needs to be camelized')).toEqual(
      'someLabelThatNeedsToBeCamelized'
    );
  });

  it('should return camel-cased string for text with underscores', () => {
    expect(toCamelCase('some_text_field_name')).toEqual('someTextFieldName');
  });

  it('should return camel-cased string for text with dashes', () => {
    expect(toCamelCase('some-js-property')).toEqual('someJsProperty');
  });

  it('should return camel-cased string for text with spaces, underscores and hyphens', () => {
    expect(
      toCamelCase('some-mixed_string with spaces_underscores-and-hyphens')
    ).toEqual('someMixedStringWithSpacesUnderscoresAndHyphens');
  });
});
