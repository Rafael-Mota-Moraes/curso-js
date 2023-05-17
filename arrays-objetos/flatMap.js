const lista = [
  { nome: "Rafael", idade: 18, cartoes: ["1234", "4341"] },
  { nome: "João", idade: 42, cartoes: ["5342", "1458"] },
  { nome: "José", idade: 23, cartoes: ["7835", "5346"] },
  { nome: "Pedro", idade: 54, cartoes: ["2656", "4135"] },
  { nome: "Gabriela", idade: 13, cartoes: ["3566", "1459"] }
];

const cartoes = lista.flatMap((cartao) => cartao.cartoes);
console.log(cartoes);
