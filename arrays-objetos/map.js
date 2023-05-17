const lista = [
  { nome: "Rafael", idade: 18 },
  { nome: "João", idade: 42 },
  { nome: "José", idade: 23 },
  { nome: "Pedro", idade: 54 },
  { nome: "Gabriela", idade: 13 }
];

const converterObjeto = (obj) => [obj.idade, obj.nome];

console.log(lista.map(converterObjeto));
