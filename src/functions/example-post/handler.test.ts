import eventHandler from "./handler";

const event = {
  body: JSON.stringify({ message: "test" }),
  headers: {},
  multiValueHeaders: {},
  httpMethod: "",
  path: "",
  pathParameters: {},
  isBase64Encoded: false,
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  stageVariables: {},
  resource: "",
};

const context = {
  dummyFunction: jest.fn().mockReturnValue("hello"),
};
describe("Event Handler Tests", () => {
  test("should test `handleHelloEvent` successfully", async () => {
    const result = await eventHandler(event, context);
    expect(JSON.parse(result.body)).toEqual({
      dummyMessage: "hello",
      message: "test",
    });
  });
  test("should handle errors in `exampleHandler`", async () => {
    const mockContext = {
      dummyFunction: async () => {
        throw new Error("Simulated error from dummyFunction");
      },
    };

    const mockEvent = {
      body: '{"key": "value"}',
    };

    const result = await eventHandler(mockEvent, mockContext);

    expect(result.statusCode).toBe(500);
    expect(JSON.parse(result.body)).toEqual({ error: "Internal Server Error" });
  });
});
