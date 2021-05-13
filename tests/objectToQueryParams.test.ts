import {objectToQueryParams} from '../source';

describe('Tests for objectToQueryParams()', () => {
  it('should return empty string for undefined', () => {
    expect(objectToQueryParams(undefined)).toEqual('');
  });

  it('should return empty string for null', () => {
    expect(objectToQueryParams(null)).toEqual('');
  });

  it('should return empty string for empty object', () => {
    expect(objectToQueryParams({})).toEqual('');
  });

  it('should return query string for object', () => {
    expect(
      objectToQueryParams({
        page: 1,
        limit: 2,
        key: undefined,
      })
    ).toEqual('page=1&limit=2');
  });

  it('should return query string for complex object', () => {
    expect(
      objectToQueryParams({
        foo: 'hello world',
        bar: {
          blah: 123,
          list: [1, 2, 3],
          'nested array': [
            [4, 5],
            [6, 7],
          ],
        },
        page: 1,
        limit: undefined,
        check: false,
        max: NaN,
        prop: null,
        ' key value': 'with spaces',
      })
    ).toEqual(
      'foo=hello%20world&bar[blah]=123&bar[list][]=1&bar[list][]=2&bar[list][]=3&bar[nested%20array][][]=4&bar[nested%20array][][]=5&bar[nested%20array][][]=6&bar[nested%20array][][]=7&page=1&check=false&prop=&key%20value=with%20spaces'
    );
  });
});
