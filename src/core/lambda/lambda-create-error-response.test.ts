/* eslint-disable @typescript-eslint/naming-convention */
import HEADERS from '@core/constants/http-headers';
import HTTP_STATUS_CODES from '@core/constants/http-status-codes';
import { lambdaCreateErrorResponse } from './lambda-create-error-response';

// Mocks for testing
const mockError = {
  statusCode: 404,
  message: 'Not Found'
};

describe('lambdaCreateErrorResponse', () => {
  it('should create an error response with the provided error status code', () => {
    const response = lambdaCreateErrorResponse(mockError);

    expect(response.statusCode).toEqual(mockError.statusCode);
    expect(response.headers[HEADERS.CONTENT_TYPE.KEY]).toEqual(HEADERS.CONTENT_TYPE.APP_JSON);
    expect(response.headers[HEADERS.ACCESS_CONTROL.KEY]).toEqual(HEADERS.ACCESS_CONTROL.ALL);
    expect(response.body).toEqual(JSON.stringify({ error: mockError }));
  });

  it('should use internal server error status code if error status code is not provided', () => {
    const response = lambdaCreateErrorResponse({});

    expect(response.statusCode).toEqual(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR);
    expect(response.headers[HEADERS.CONTENT_TYPE.KEY]).toEqual(HEADERS.CONTENT_TYPE.APP_JSON);
    expect(response.headers[HEADERS.ACCESS_CONTROL.KEY]).toEqual(HEADERS.ACCESS_CONTROL.ALL);
    expect(response.body).toEqual(JSON.stringify({ error: {} }));
  });
});
