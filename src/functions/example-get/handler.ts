const exampleHandler = async (event, context) => {
  try {
    const { dummyFunction } = context;
    console.log('event', event);
    const { pathParameters, queryStringParameters } = event;
    const dummyMessageFromFunction = await dummyFunction();
    return {
      statusCode: 200,
      body: JSON.stringify({
        dummyMessageFromFunction,
        pathParameters,
        queryStringParameters
      })
    };
  } catch (error) {
    throw new Error('Ups some mistake');
  }
};

export default exampleHandler;
