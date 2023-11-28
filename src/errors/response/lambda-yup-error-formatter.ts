import {
  zipObj,
  mergeAll,
  identity,
  map,
  is,
  applySpec,
  prop,
  pathOr,
  compose,
  propSatisfies,
  propEq,
} from "ramda";
import { createErrorResponse } from "./create-error-response";
import { throwErrorWith } from "@errors";

const isYupValidationError = propEq("name", "ValidationError");

// Función para verificar si el error es una validación de Yup

const detailedErrorFormatter = applySpec({
  message: prop("message"),
  details: prop("stack"),
});

const standardErrorFormatter = applySpec({
  message: prop("message"),
  details: compose(detailedErrorFormatter, prop("error")),
  data: prop("data"),
  code: pathOr(undefined, ["error", "errorCode"]),
  status: pathOr(undefined, ["error", "status"]),
});

export const lambdaYupErrorFormatter = (error) => {
  error.statusCode = 400;
  error.data = { input: error.value };
  return error;
};
