import {get} from '../source';

describe('get tests', () => {
  it('should get value from path', () => {
    const state = get(
      {
        test: {
          testing: 4,
        },
        chat: {
          creative: {
            channel: 1234,
          },
        },
      },
      'chat.creative'
    );

    return expect(state).toEqual({
      channel: 1234,
    });
  });

  it('should return undefined for undefined', () => {
    expect(get(undefined, 'something')).toEqual(undefined);
  });

  it('should return undefined for null', () => {
    expect(get(null, 'something')).toEqual(undefined);
  });

  it('should return the object itself', () => {
    const state = get({
      test: {
        testing: 4,
      },
    });

    return expect(state).toEqual({
      test: {
        testing: 4,
      },
    });
  });

  it('should return undefined from non-existent path', () => {
    const state = get(
      {
        test: {
          testing: 4,
        },
      },
      'chat.creative.channelSid'
    );

    return expect(state).toEqual(undefined);
  });

  it('should return defaultValue if provided when path is non-existent', () => {
    const state = get(
      {
        test: {
          testing: 4,
        },
      },
      'chat.creative.channelSid',
      1111
    );

    return expect(state).toEqual(1111);
  });

  it('should return value at array index', () => {
    const state = get(
      {
        selector: {to: {val: 'val to select'}},
        target: [1, 2, {a: 'test'}],
      },
      'target.2.a'
    );

    return expect(state).toEqual('test');
  });

  it('should return value through key indexing(1)', () => {
    const state = get(
      {
        selector: {to: {val: 'val to select'}},
        target: [1, 2, {a: 'test'}],
      },
      'selector[to][val]'
    );

    return expect(state).toEqual('val to select');
  });

  it('should return value through key indexing(2)', () => {
    const state = get(
      {
        selector: {to: {val: 'val to select'}},
        target: [1, 2, {a: 'test'}],
      },
      'target.2.[a]'
    );

    return expect(state).toEqual('test');
  });

  it('should return null value', () => {
    const state = get(
      {
        test: {
          testing: null,
        },
      },
      'test.testing'
    );

    return expect(state).toEqual(null);
  });

  it('should return undefined value', () => {
    const state = get(
      {
        test: {
          testing: undefined,
        },
      },
      'test.testing'
    );

    return expect(state).toEqual(undefined);
  });

  it('should return passed object as such for invalid selector', () => {
    const obj = {
      test: {
        testing: 'hello world',
      },
    };
    const state = get(obj, null);

    return expect(state).toEqual(obj);
  });
});
