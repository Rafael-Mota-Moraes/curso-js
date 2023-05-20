function calcular(valor) {
  if (valor === 0) {
    throw new Error("Não pode ser 0");
  }
  return valor / 2;
}

try {
  console.log(calcular(0));
} catch (error) {
  console.log("Ocorreu algum erro!", error.message);
}
