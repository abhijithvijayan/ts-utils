import {randomNumberInRange} from '../source';

describe('Tests for randomNumberInRange()', () => {
  it('should return a random number', () => {
    const min = 10;
    const max = 20;
    const rand = randomNumberInRange(min, max);

    expect(rand).toBeGreaterThanOrEqual(min);
    expect(rand).toBeLessThan(max);
  });
});
