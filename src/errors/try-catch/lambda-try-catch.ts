import { throwErrorWith } from "../response/throw-error-with";

export const lambdaTryCatch = (fn) => async (event, context) => {
  try {
    return await fn(event, context);
  } catch (error) {
    throwErrorWith(error);
  }
};
