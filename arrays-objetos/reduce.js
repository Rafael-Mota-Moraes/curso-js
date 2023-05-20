const lista = [
  { nome: "Rafael", idade: 18 },
  { nome: "João", idade: 42 },
  { nome: "José", idade: 23 },
  { nome: "Pedro", idade: 54 },
  { nome: "Gabriela", idade: 13 }
];

const pessoa = {
  jose: {
    idade: 54
  },
  joao: {
    idade: 34
  },
  maria: {
    idade: 56
  }
};

const pessoas = lista.reduce((acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: {
      ...objeto
    }
  };
}, {});

console.log(pessoas);
