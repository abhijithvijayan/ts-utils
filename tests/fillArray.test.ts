import {fillArray} from '../source';

describe('Tests for fillArray()', () => {
  it('should return array with null values', () => {
    expect(fillArray(1, null)).toEqual([null]);
  });

  it('should return array with undefined values', () => {
    expect(fillArray(2, undefined)).toEqual([undefined, undefined]);
  });

  it('should return array for optional value', () => {
    expect(fillArray(3)).toEqual([undefined, undefined, undefined]);
  });

  it('should return empty array for invalid size', () => {
    expect(fillArray(undefined, undefined)).toEqual([]);
  });

  it('should return array with integer values', () => {
    expect(fillArray(5, 2)).toEqual([2, 2, 2, 2, 2]);
  });

  it('should return array with empty object', () => {
    expect(fillArray(3, {})).toEqual([{}, {}, {}]);
  });

  it('should return empty array', () => {
    expect(fillArray(0)).toEqual([]);
  });

  it('should return filled array with value from passed object', () => {
    expect(fillArray({length: 2, value: 'test'})).toEqual(['test', 'test']);
  });

  it('should return filled array with index as value', () => {
    expect(fillArray({length: 5, fillIndex: true})).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return empty array', () => {
    expect(fillArray({length: undefined})).toEqual([]);
  });

  it('should return filled array with using object prop', () => {
    expect(fillArray({length: 2})).toEqual([undefined, undefined]);
  });

  it('should return empty array', () => {
    expect(fillArray({length: null, fillIndex: true})).toEqual([]);
  });

  it('should return filled array with null values', () => {
    expect(
      fillArray({length: 2, fillIndex: false, value: null}, 'world')
    ).toEqual([null, null]);
  });

  it('should return filled array', () => {
    expect(
      fillArray({length: 1, fillIndex: false, value: 'hello'}, 'there')
    ).toEqual(['hello']);
  });
});
