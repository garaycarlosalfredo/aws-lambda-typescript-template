// throw-error-with.test.ts
import { lambdaCreateErrorResponse } from './lambda-create-error-response';
import { throwErrorWith } from './throw-error-with';

// mock lambdaCreateErrorResponse
jest.mock('./lambda-create-error-response', () => {
  return {
    ...jest.requireActual('./lambda-create-error-response'),
    lambdaCreateErrorResponse: jest.fn().mockImplementation(error => {
      return {
        statusCode: 500,
        headers: {},
        body: JSON.stringify({ error })
      };
    })
  };
});

describe('throwErrorWith', () => {
  it('should throw a lambda-friendly error response', () => {
    const errorDetails = {
      data: { mock: 'data' },
      details: 'details',
      message: 'message',
      stack: 'stack',
      status: 'status',
      statusCode: 1
    };

    expect(() => throwErrorWith(errorDetails)).toThrowError();
    expect(lambdaCreateErrorResponse).toHaveBeenCalledWith({
      message: 'message',
      statusCode: 1,
      status: 'status',
      details: 'details',
      data: { mock: 'data' },
      stack: 'stack'
    });
  });
});
