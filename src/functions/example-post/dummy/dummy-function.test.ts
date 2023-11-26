import dummyFunction from "./dummy-function"; // Asegúrate de ajustar la ruta según tu estructura de directorios

describe("texto", () => {
  test("should return 'dummy function execution !!'", async () => {
    const result = await dummyFunction();
    expect(result).toBe("dummy function execution !!");
  });
});
