const exampleHandler = async (event, context) => {
  try {
    const { dummyFunction } = context;
    console.log("event", event);
    const { pathParameters } = event;
    const dummyMessage = await dummyFunction();
    return {
      statusCode: 200,
      body: JSON.stringify({ ...pathParameters, dummyMessage }),
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

export default exampleHandler;
