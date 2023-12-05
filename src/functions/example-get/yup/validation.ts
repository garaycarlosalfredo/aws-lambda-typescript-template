import { object, string } from 'yup';

const querySchema = object({
  by: string().required('by is a required query param')
}).nullable();
const pathSchema = object({}).nullable();
const bodySchema = object({}).nullable();

export { querySchema, pathSchema, bodySchema };
