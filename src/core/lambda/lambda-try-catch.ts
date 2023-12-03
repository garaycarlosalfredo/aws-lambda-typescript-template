import { curry } from 'ramda';
import { throwErrorWith } from './throw-error-with';

export const lambdaTryCatch = curry(async (fn, event, context) => {
  try {
    return await fn(event, context);
  } catch (error) {
    throwErrorWith(error);
  }
});
