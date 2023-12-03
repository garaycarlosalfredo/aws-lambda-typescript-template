import { compose } from 'ramda';
import { config } from '@config/config';
import { lambdaFunctionContextInjector, lambdaTryCatch, lambdaYupValidation } from '@core/lambda';
import dummyFunction from './dummy/dummy-function';
import exampleHandler from './handler';
import { bodySchema, pathSchema, querySchema } from './yup/validation';

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const httpCreateEventHandler = config => {
  // eg. function config should be made here before inject functions
  console.log('just an example', config);
  return compose(
    lambdaTryCatch,
    lambdaFunctionContextInjector({ greeting: dummyFunction, config }),
    lambdaYupValidation({ bodySchema, pathSchema, querySchema })
  )(exampleHandler);
};

export default httpCreateEventHandler(config);
