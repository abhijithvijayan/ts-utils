import {isBrowser} from '../source';

describe('Tests for isBrowser()', () => {
  it('should return false for node.js runtime', () => {
    expect(isBrowser()).toEqual(false);
  });
});
