class Usuario {
  nome;
  senha;
  email;

  constructor(email, senha, nome) {
    Object.defineProperties(this, {
      nome: {
        get: () => email,
        set: (value) => (email = value)
      },
      senha: {
        get: () => email,
        set: (value) => {
          if (value.length < 4) {
            throw new Error(
              "Senha muito pequena, deve ter no mínimo 4 caracteres"
            );
          }
          senha = senha;
        }
      },
      email: {
        get: () => email,
        set: (value) => (email = value)
      }
    });
  }
}

const usuario = new Usuario("email", "senha", "nome");
usuario.senha = "12";
console.log(usuario.senha);
