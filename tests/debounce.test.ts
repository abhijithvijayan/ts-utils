// Tell Jest to mock all timeout functions
import {debounce} from '../source';

jest.useFakeTimers();

describe('debounce', () => {
  let func: jest.Mock;
  let debouncedFunc: Function;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test('should execute function just once', () => {
    for (let i = 0; i < 100; i += 1) {
      debouncedFunc();
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
