import { compose, curry } from "ramda";
import { lambdaTryCatch } from "@errors";
import { lambdaYupValidation } from "@util";
import dummyFunction from "./dummy/dummy-function";
import exampleHandler from "./handler";
import { bodySchema, pathSchema, querySchema } from "./yup/validation";
import config from "../../config/config";

const lambdaContextInjector = curry(
  (dummyFunction, handler, event, context) => {
    console.log("config", config);
    return handler(event, { ...context, dummyFunction });
  },
);

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const httpCreateEventHandler = (config) => {
  return compose(
    lambdaTryCatch,
    lambdaContextInjector(dummyFunction),
    lambdaYupValidation({ bodySchema, pathSchema, querySchema }),
  )(exampleHandler);
};

export default httpCreateEventHandler(config);
