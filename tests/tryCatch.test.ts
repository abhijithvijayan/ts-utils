import {FnExecStatus, Messages, NullOrUndefined} from '../source/utils';
import {tryCatch} from '../source';

describe('Tests for tryCatch()', () => {
  it('should handle thrown error for undefined', () => {
    const fn = tryCatch(undefined);

    expect(fn()).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: Messages.TypeError,
      }),
    });
  });

  it('should handle thrown error for null', () => {
    const fn = tryCatch(null);

    expect(fn()).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: Messages.TypeError,
      }),
    });
  });

  test('should expect fulfilled and rejected states', () => {
    const ok = (arg1: string, arg2: string): string => {
      return `${arg1}-${arg2}`;
    };
    const error = (arg1: string, arg2: string): void => {
      throw new Error(ok(arg1, arg2));
    };
    let fn: Function;

    expect(
      (() => {
        fn = tryCatch(ok);

        return fn('no', 'error');
      })()
    ).toEqual({
      status: FnExecStatus.FULFILLED,
      value: 'no-error',
    });

    expect(
      (() => {
        fn = tryCatch(error);

        return fn('throws', 'error');
      })()
    ).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: 'throws-error',
      }),
    });
  });

  it('should return undefined for void functions', () => {
    const fn = tryCatch(() => {});

    expect(fn()).toEqual({
      status: FnExecStatus.FULFILLED,
      value: undefined,
    });
  });

  test('should expect fulfilled and rejected states for JSON.parse() method', () => {
    let json: string | NullOrUndefined = '';
    const fn = (str: typeof json) =>
      tryCatch(JSON.parse.bind(null, str as unknown as string)); // manual override for JSON.parse(undefined)

    expect(
      (() => {
        json = '{ "age": 30 }';

        return fn(json)();
      })()
    ).toEqual({
      status: FnExecStatus.FULFILLED,
      value: expect.objectContaining({
        age: 30,
      }),
    });

    expect(
      (() => {
        json = '{ bad json o_O }"';

        return fn(json)();
      })()
    ).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: 'Unexpected token b in JSON at position 2',
      }),
    });

    expect(
      (() => {
        json = undefined;

        return fn(json)();
      })()
    ).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: 'Unexpected token u in JSON at position 0',
      }),
    });

    expect(
      (() => {
        json = '{}';

        return fn(json)();
      })()
    ).toEqual({
      status: FnExecStatus.FULFILLED,
      value: {},
    });
  });

  test('should expect proper values for series of synchronous actions', () => {
    let log = '';

    function doWork(): void {
      log += 'W';
    }

    function doError(): void {
      log += 'E';

      throw new Error('oops!');
    }

    const fn = tryCatch(() => {
      doWork();
      doWork();
      doError(); // will stop here
      doWork();
      doWork();
    });

    expect(fn()).toEqual({
      status: FnExecStatus.REJECTED,
      reason: expect.objectContaining({
        message: 'oops!',
      }),
    });

    expect(log).toBe('WWE');
  });
});
