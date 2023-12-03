import { lambdaCreateErrorResponse } from './lambda-create-error-response';

export const throwErrorWith = ({ data, details, message, stack, status, statusCode }) => {
  throw lambdaCreateErrorResponse({
    message,
    statusCode,
    status,
    details,
    data,
    stack
  });
};
