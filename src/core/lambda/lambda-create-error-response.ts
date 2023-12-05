import HEADERS from '@core/constants/http-headers';
// eslint-disable-next-line @typescript-eslint/naming-convention
import HTTP_STATUS_CODES from '@core/constants/http-status-codes';

export const lambdaCreateErrorResponse = error => {
  const statusCode = error?.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;

  const body = JSON.stringify({
    error
  });

  const headers = {
    [HEADERS.CONTENT_TYPE.KEY]: HEADERS.CONTENT_TYPE.APP_JSON,
    [HEADERS.ACCESS_CONTROL.KEY]: HEADERS.ACCESS_CONTROL.ALL
  };

  return {
    statusCode,
    headers,
    body
  };
};
