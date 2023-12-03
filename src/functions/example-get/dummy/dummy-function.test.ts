import dummyFunction from './dummy-function';

describe('Function "dummyFunction"', () => {
  test("should return 'dummy function execution !!'", async () => {
    const result = await dummyFunction();
    expect(result).toBe('dummy function execution !!');
  });
});
