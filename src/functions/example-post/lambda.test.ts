/* eslint-disable @typescript-eslint/naming-convention */
import exampleHandler from './handler';
import httpEventHandlerInitial from './lambda';

// Mock de exampleHandler
jest.mock('./handler', () => ({
  __esModule: true,
  default: jest.fn()
}));

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

const context = {};

test('should inject dummyFunction into the context of exampleHandler', async () => {
  await httpEventHandlerInitial(event, context);
  expect(exampleHandler).toHaveBeenCalledWith(
    event,
    expect.objectContaining({
      greeting: expect.any(Function)
    })
  );
});
