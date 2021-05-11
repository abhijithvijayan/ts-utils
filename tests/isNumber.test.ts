import {isNumber} from '../source';

describe('isNumber() tests', () => {
  it('Should return true with number', () => {
    expect(isNumber(10)).toEqual(true);
  });

  it('Should return true with negative number', () => {
    expect(isNumber(-10)).toEqual(true);
  });

  it('Should return true with float number', () => {
    expect(isNumber(-10.234)).toEqual(true);
  });

  it('Should return false with infinite number', () => {
    expect(isNumber(10 / 0)).toEqual(false);
  });

  it('Should return false with number string', () => {
    expect(isNumber('10')).toEqual(false);
  });

  it('Should return false with undefined', () => {
    expect(isNumber(undefined)).toEqual(false);
  });

  it('Should return false with null', () => {
    expect(isNumber(null)).toEqual(false);
  });

  it('Should return false with boolean true', () => {
    expect(isNumber(true)).toEqual(false);
  });

  it('Should return false with boolean false', () => {
    expect(isNumber(false)).toEqual(false);
  });

  it('Should return false with object', () => {
    expect(isNumber({})).toEqual(false);
  });

  it('Should return false with NaN', () => {
    expect(isNumber(NaN)).toEqual(false);
  });

  it('Should return true with Number object', () => {
    expect(isNumber(Number(10))).toEqual(true);
  });
});
