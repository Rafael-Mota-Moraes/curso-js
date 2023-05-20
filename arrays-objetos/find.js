const lista = [
  { nome: "Rafael", idade: 18 },
  { nome: "João", idade: 42 },
  { nome: "José", idade: 23 },
  { nome: "Pedro", idade: 54 },
  { nome: "Gabriela", idade: 13 }
];

const rafael = lista.find((pessoa) => pessoa.nome == "Rafael");
console.log(rafael);
