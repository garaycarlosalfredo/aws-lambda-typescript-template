import { object, string, date } from "yup";

let querySchema = object({
  by: string().required("by is a required query param"),
}).nullable()

let pathSchema = object({}).nullable();

const bodySchema = object({}).nullable();

export { querySchema, pathSchema, bodySchema };
