import { cumprimentar } from "./cumprimentar.js";

describe("teste de saudações", () => {
  test("teste de saudação simples com nome", () => {
    const esperado = cumprimentar("Lucas");
    expect(esperado).toBe("Olá, Lucas!");
  });

  test("teste de saudação sem nome", () => {
    const esperado = cumprimentar("");
    expect(esperado).toBe("Olá, você aí!");
  });
});
