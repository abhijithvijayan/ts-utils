import {round} from '../source';

describe('Tests for round()', () => {
  it('should return rounded number to 2 decimals', () => {
    expect(round(1.005, 2)).toEqual(1.01);
  });

  it('should return rounded number to 0 decimals', () => {
    expect(round(1.94899)).toEqual(2);
  });
});
