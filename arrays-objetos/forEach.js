const lista = [
  { nome: "Rafael", idade: 18 },
  { nome: "João", idade: 42 },
  { nome: "José", idade: 23 },
  { nome: "Pedro", idade: 54 },
  { nome: "Gabriela", idade: 13 }
];

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
// }

let idadesSomadas = 0;

lista.forEach((objeto) => (idadesSomadas += objeto.idade));

console.log(idadesSomadas);
