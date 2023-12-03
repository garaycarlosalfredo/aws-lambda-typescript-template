// eslint-disable-next-line @typescript-eslint/naming-convention
import HTTP_STATUS_CODES from '@core/constants/http-status-codes';

export const lambdaYupErrorFormatter = error => {
  error.statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
  error.data = { input: error.value };
  return error;
};
