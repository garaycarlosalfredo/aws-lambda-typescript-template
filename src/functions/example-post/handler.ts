const exampleHandler = async (event, context) => {
  const { greeting } = context;
  const { body } = event;
  const bodyObject = JSON.parse(body);
  const dummyMessage = await greeting();
  return {
    statusCode: 200,
    body: JSON.stringify({ dummyMessage, body: bodyObject })
  };
};

export default exampleHandler;
