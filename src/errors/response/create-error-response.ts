import { props, clone } from "ramda";

export const createErrorResponse = (error) => {
  const response = {
    statusCode: error?.statusCode || 500,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      error,
    }),
  };

  return response;
};
