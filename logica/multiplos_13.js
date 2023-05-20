function multiplos13(v1, v2) {
  let maior = 0;
  let menor = 0;
  let soma = 0;

  if (v1 > v2) {
    maior = v1;
    menor = v2;
  } else {
    maior = v2;
    menor = v1;
  }

  for (menor; menor <= maior; menor++) {
    if (menor % 13 !== 0) {
      soma = menor + soma;
    }
  }

  return soma;
}

console.log(multiplos13(200, 100));
