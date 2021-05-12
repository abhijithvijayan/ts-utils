import {randomIntegerInRange} from '../source';

describe('Tests for randomIntegerInRange()', () => {
  it('should return a random number', () => {
    const min = 10;
    const max = 20;
    const rand = randomIntegerInRange(min, max);

    expect(rand).toBeGreaterThanOrEqual(min);
    expect(rand).toBeLessThanOrEqual(max);
  });
});
