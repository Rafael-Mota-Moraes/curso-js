class Usuario {
  nome;
  senha;
  email;

  constructor(email, senha, nome) {
    Object.defineProperties(this, {
      nome: {
        value: nome,
        writable: false,
        configurable: false,
        enumerable: true
      },
      senha: {
        value: senha,
        writable: false,
        configurable: false,
        enumerable: true
      },
      email: {
        value: email,
        writable: false,
        configurable: false,
        enumerable: true
      }
    });

    // Object.defineProperty(this, "nome", {
    //   value: nome,
    //   writable: false,
    //   configurable: false,
    //   enumerable: true
    // });
  }
}

const usuario = new Usuario("email", "senha", "nome");
usuario.nome = "Novo Nome";
console.log(usuario);
