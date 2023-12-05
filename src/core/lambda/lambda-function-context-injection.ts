import { curry } from 'ramda';

export const lambdaFunctionContextInjector = curry((fn, handler, event, context) => {
  return handler(event, { ...context, ...fn });
});
