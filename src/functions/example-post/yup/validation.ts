import { object, string, date } from "yup";

let querySchema = object({}).nullable();

let pathSchema = object({}).nullable();

const bodySchema = object({
  message: string().required(),
}).required();

export { querySchema, pathSchema, bodySchema };
