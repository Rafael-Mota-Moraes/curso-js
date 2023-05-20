const lista = [
  { nome: "Rafael", idade: 18 },
  { nome: "João", idade: 42 },
  { nome: "José", idade: 23 },
  { nome: "Pedro", idade: 54 },
  { nome: "Gabriela", idade: 13 }
];

lista.sort((a, b) => {
  if (a.idade < b.idade) {
    return -1;
  }

  if (a.idade > b.idade) {
    return 1;
  }

  return 0;
});
console.log(lista);
