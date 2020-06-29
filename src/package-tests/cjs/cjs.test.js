import services from '@haensl/services';

describe('cjs module test', () => {
  it('works', () => {
    expect(services)
      .toEqual('test');
  });
});

