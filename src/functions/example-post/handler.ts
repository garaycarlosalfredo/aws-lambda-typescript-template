const exampleHandler = async (event, context, c, d) => {
  try {
    const { dummyFunction } = context;
    const { body } = event;
    const bodyObject = JSON.parse(body);
    const dummyMessage = await dummyFunction();
    return {
      statusCode: 200,
      body: JSON.stringify({ ...bodyObject, dummyMessage }),
    };
  } catch (error) {
    throw error;
  }
};

export default exampleHandler;
