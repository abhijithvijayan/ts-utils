import {round} from '../source';

describe('Tests for round()', () => {
  it('should return -1 for undefined', () => {
    expect(round(undefined)).toEqual(-1);
  });

  it('should return -1 for null', () => {
    expect(round(null)).toEqual(-1);
  });

  it('should return number as such when decimal is not a number', () => {
    expect(round(100, null)).toEqual(100);
  });

  it('should return rounded number to 2 decimals', () => {
    expect(round(1.005, 2)).toEqual(1.01);
  });

  it('should return rounded number to 0 decimals', () => {
    expect(round(1.94899)).toEqual(2);
  });
});
