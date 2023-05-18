class Usuario {
  email;
  password;
  nome;

  constructor(email, senha, nome) {
    this.email = email;
    this.senha = senha;
    this.nome = nome;
  }
}

class Administrador extends Usuario {
  permissoes;

  constructor(email, senha, nome, permissoes) {
    super(email, senha, nome);
    this.permissoes = permissoes;
  }
}

class Comprador extends Usuario {
  compras;
}

const admin = new Administrador("email@email.com", "123123", "admin", [1, 6]);

const comprador = new Comprador();
comprador.senha = "NovaSenha";

console.log(admin);
console.log(comprador);
