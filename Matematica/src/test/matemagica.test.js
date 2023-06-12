import Matemagica from "../matemagica";

describe("Matemagica", () => {
  let matemagica;

  beforeEach(() => {                //a cada nova execução do teste ele começará com uma instância nova|
    matemagica = new Matemagica();  //e limpa da classe, evitando erros entre os testes                |
  });

  describe("adicao", () => {
    it("test sums between two numbers", () => {
      expect(matemagica.adicao(2, 3)).toBe(5);
    });
  });

  describe("subtracao", () => {
    it("test subtraction between two numbers", () => {
      expect(matemagica.subtracao(5, 2)).toBe(3);
    });
  });

  describe("divisao", () => {
    it("deve retornar o quociente da divisão entre dois números", () => {
      expect(matemagica.divisao(10, 2)).toBe(5);
    });

    it("deve lançar um erro ao dividir por zero", () => {
      expect(() => matemagica.divisao(10, 0)).toThrowError(
        "Divisão por zero não é permitida."
      );
    });
  });

  describe("multiplicacao", () => {
    it("test multiplication between two numbers", () => {
      expect(matemagica.multiplicacao(2, 3)).toBe(6);
    });
  });
});