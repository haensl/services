import services from '@haensl/services';

describe('esm module test', () => {
  it('works', () => {
    expect(services)
      .toEqual('test');
  });
});
