class Matematica {
  adicao(a, b) {
    return a + b;
  }

  subtracao(a, b) {
    return a - b;
  }

  divisao(a, b) {
    if (b === 0) {
      throw new Error("Nâo se pode dividir por zero.");
    }
    return a / b;
  }

  multiplicacao(a, b) {
    return a * b;
  }
}

export default Matematica;