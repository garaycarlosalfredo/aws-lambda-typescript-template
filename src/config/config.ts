// Extract environment variables declared in `serverless.yml`
const { NODE_ENV, SOME_ENV_VARIABLE } = process.env;

console.log('SOME_ENV_VARIABLE', SOME_ENV_VARIABLE);

// ...and build an immutable configuration object from them
export const config = Object.freeze({
  environment: NODE_ENV,
  environmentValue: SOME_ENV_VARIABLE
});

export type Configuration = typeof config;
