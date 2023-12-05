import eventHandler from './handler';

const event = {
  body: null,
  headers: {},
  multiValueHeaders: {},
  httpMethod: '',
  path: '/hello',
  pathParameters: { greeting: 'hello' },
  isBase64Encoded: false,
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  resource: ''
};

const context = {
  dummyFunction: jest.fn().mockReturnValue('hello')
};
describe('Event Handler Tests', () => {
  test('should test `handleHelloEvent` successfully', async () => {
    const result = await eventHandler(event, context);
    expect(JSON.parse(result.body)).toEqual({
      dummyMessageFromFunction: 'hello',
      pathParameters: {
        greeting: 'hello'
      },
      queryStringParameters: {}
    });
  });
  test('should handle errors in `exampleHandler`', async () => {
    const mockContext = {
      dummyFunction: async () => {
        throw new Error();
      }
    };

    const mockEvent = {
      body: '{"key": "value"}'
    };

    await eventHandler(mockEvent, mockContext).catch(error =>
      expect(error.message).toEqual('Ups some mistake')
    );
  });
});
