import { curry } from 'ramda';
import { lambdaYupErrorFormatter } from './util/lambda-yup-error-formatter';

export const lambdaYupValidation = curry(
  async ({ bodySchema, pathSchema, querySchema }, handler, event, context) => {
    const { body, pathParameters, queryStringParameters } = event;
    const payload = JSON.parse(body);
    try {
      if (bodySchema) {
        await bodySchema.validate(payload);
      }
      if (querySchema) {
        await querySchema.validate(queryStringParameters);
      }
      if (pathSchema) {
        await pathSchema.validate(pathParameters);
      }
      return handler(event, context);
    } catch (error) {
      throw lambdaYupErrorFormatter(error);
    }
  }
);
