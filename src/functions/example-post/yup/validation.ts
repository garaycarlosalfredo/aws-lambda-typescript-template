import { object, string } from 'yup';

const querySchema = object({}).nullable();
const pathSchema = object({}).nullable();
const bodySchema = object({
  message: string().required()
}).required();

export { querySchema, pathSchema, bodySchema };
