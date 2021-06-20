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
});
