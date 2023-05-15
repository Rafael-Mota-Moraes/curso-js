const CONSUMO_COMBUSTIVEL = 12;

function gastoDeCombustivel(tempoGasto, velocidadeMedia) {
  const disancia = velocidadeMedia * tempoGasto;
  const consumoFinal = disancia / CONSUMO_COMBUSTIVEL;

  return consumoFinal.toFixed(3);
}

console.log(gastoDeCombustivel(10, 85));
console.log(gastoDeCombustivel(2, 92));
console.log(gastoDeCombustivel(22, 67));
