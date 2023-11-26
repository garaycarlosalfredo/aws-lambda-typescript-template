const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!src/functions/**/lambda.ts",
    "!src/config.ts",
    "!src/shared/types/**",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!.serverless/**",
    "!.esbuild/**",
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  transform: {
    "^.+\\.(j|t)s?$": [
      "esbuild-jest",
      {
        sourcemap: true,
      },
    ],
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testPathIgnorePatterns: ["<rootDir>/.build"],
  globalSetup: "./jest-setup.js",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
