const rafael = {
  nome: "Rafael",
  idade: 18,
  peso: 80,
  genero: "Masculino",
  nacionalidade: "Brasileiro",
  endereco: {
    rua: "Tal",
    numero: 124
  },
  temFilhos: false
};

const exibirInformacoes = (pessoa) => {
  console.log("Idade:", pessoa.idade);
  console.log(`Peso do ${pessoa.nome}:`, pessoa.peso);
  console.log("Mora na rua:", pessoa.endereco.rua);
};

exibirInformacoes(rafael);
