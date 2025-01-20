function cumprimentar(nome) {
  const cumprimento = validarCumprimento(nome);

  return cumprimento;
}

function validarCumprimento(nome) {
  if (!nome) {
    return "Olá, você aí!";
  }
  return `Olá, ${nome}!`;
}

export { cumprimentar as cumprimentar };
