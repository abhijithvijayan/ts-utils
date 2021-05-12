import {pipe} from '../source';

describe('Tests for pipe()', () => {
  it('should return composed value of 2 functions', () => {
    const add5 = (x: number): number => x + 5;
    const multiply = (x: number, y: number): number => x * y;
    const multiplyAndAdd5 = pipe(multiply, add5);
    expect(pipe(multiplyAndAdd5(5, 2))).toEqual(15);
  });
});
