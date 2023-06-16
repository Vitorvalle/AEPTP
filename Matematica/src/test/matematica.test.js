import Matematica from "../matematica";

describe("Matematica", () => {
  let matematica;

  beforeEach(() => {
    matematica = new Matemagica();  
  });

  describe("adicao", () => {
    it("test sums between two numbers", () => {
      expect(matematica.adicao(2, 3)).toBe(5);
    });
  });

  describe("subtracao", () => {
    it("test subtraction between two numbers", () => {
      expect(matematica.subtracao(5, 2)).toBe(3);
    });
  });

  describe("divisao", () => {
    it("deve retornar o quociente da divisão entre dois números", () => {
      expect(matematica.divisao(10, 2)).toBe(5);
    });

    it("deve lançar um erro ao dividir por zero", () => {
      expect(() => matematica.divisao(10, 0)).toThrowError(
        "Divisão por zero não é permitida."
      );
    });
  });

  describe("multiplicacao", () => {
    it("test multiplication between two numbers", () => {
      expect(matematica.multiplicacao(2, 3)).toBe(6);
    });
  });
});