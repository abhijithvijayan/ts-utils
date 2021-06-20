import {FnExecStatus, Messages} from '../source/utils';
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

  test('should expect fulfilled and rejected states ', () => {
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
});
