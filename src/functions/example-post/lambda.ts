import { compose } from "ramda";
import dummyFunction from "./dummy/dummy-function";
import exampleHandler from "./handler";
import config from "../../config/config";

const injectToContext = (handler) => (event, context) => {
  return handler(event, { ...context, dummyFunction });
};

/**
 * Builds an AWS λ handler function from the given `config` and injects required dependencies into its context.
 *
 * @param {object} config A configuration object.
 * @returns {Function} An AWS λ handler functions.
 */
const httpCreateEventHandler = (config) => {
  return compose(injectToContext)(exampleHandler);
};

export default httpCreateEventHandler(config);
