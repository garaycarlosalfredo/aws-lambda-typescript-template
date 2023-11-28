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
} from "ramda";
import { createErrorResponse } from "./create-error-response";

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

export const throwErrorWith = ({
  message,
  statusCode,
  status,
  details,
  stack,
  data,
}) => {
  throw createErrorResponse({
    message,
    statusCode,
    status,
    details,
    data,
    stack,
  });
};
