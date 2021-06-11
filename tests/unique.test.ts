import {unique} from '../source';

describe('Tests for unique()', () => {
  it('should return empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should return unique array', () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return unchanged array of empty objects', () => {
    expect(unique([{}, {}])).toEqual([{}, {}]);
  });

  it('should return unchanged array of empty arrays', () => {
    expect(unique([[], []])).toEqual([[], []]);
  });

  it('should return undefined for undefined', () => {
    expect(unique(undefined)).toEqual(undefined);
  });

  it('should return undefined for null', () => {
    expect(unique(null)).toEqual(undefined);
  });
});
