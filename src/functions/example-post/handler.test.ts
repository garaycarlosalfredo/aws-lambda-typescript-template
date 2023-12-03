import eventHandler from './handler';

const event = {
  body: JSON.stringify({ message: 'test' }),
  headers: {},
  multiValueHeaders: {},
  httpMethod: '',
  path: '',
  pathParameters: {},
  isBase64Encoded: false,
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  resource: ''
};

const context = {
  greeting: jest.fn().mockReturnValue('hello')
};
describe('Event Handler Tests', () => {
  test('should test `handleHelloEvent` successfully', async () => {
    const result = await eventHandler(event, context);
    expect(JSON.parse(result.body)).toEqual({
      body: {
        message: 'test'
      },
      dummyMessage: 'hello'
    });
  });
  test('should handle errors in `exampleHandler`', async () => {
    const mockContext = {
      greeting: async () => {
        throw new Error('Simulated error from dummyFunction');
      }
    };

    const mockEvent = {
      body: '{"key": "value"}'
    };

    await eventHandler(mockEvent, mockContext).catch(error =>
      expect(error.message).toEqual('Simulated error from dummyFunction')
    );
  });
});
