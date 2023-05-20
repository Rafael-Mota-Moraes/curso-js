function somaRecursiva(valor) {
  if (valor === 0) {
    return 0;
  }

  return valor + somaRecursiva(valor - 1);
}

console.log(somaRecursiva(3));
