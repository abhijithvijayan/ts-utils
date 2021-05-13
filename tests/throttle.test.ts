// Tell Jest to mock all timeout functions
import {throttle} from '../source';

jest.useFakeTimers();

describe('throttle', () => {
  let func: jest.Mock;
  let throttledFunc: Function;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  test('should execute function just once', () => {
    for (let i = 0; i < 100; i += 1) {
      throttledFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
