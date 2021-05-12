import {randomString} from '../source';

describe('Tests for randomString()', () => {
  it('should return a random string', () => {
    expect(typeof randomString()).toBe('string');
  });
});
