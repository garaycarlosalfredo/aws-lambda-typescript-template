import * as yup from 'yup';
import { lambdaYupValidation } from './lambda-yup-validation';

// Mocks for testing
const mockHandler = jest.fn();
const mockEvent = {
  body: '{"key": "value"}',
  pathParameters: { param: 'value' },
  queryStringParameters: { query: 'value' }
};
const mockContext = {};

describe('lambdaYupValidation', () => {
  it('should call the handler if validation passes', async () => {
    const mockSchema = yup.object().shape({
      key: yup.string().required()
    });

    await lambdaYupValidation({ bodySchema: mockSchema }, mockHandler, mockEvent, mockContext);

    expect(mockHandler).toHaveBeenCalled();
  });

  it('should throw an error if body validation fails', async () => {
    const mockSchema = yup.object().shape({
      incorrectKey: yup.string().required()
    });

    await expect(
      lambdaYupValidation({ bodySchema: mockSchema }, mockHandler, mockEvent, mockContext)
    ).rejects.toThrow();
  });
});
