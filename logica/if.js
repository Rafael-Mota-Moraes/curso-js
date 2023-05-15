const idade = 8;
const nome = "Pedro";
let podeEntrar = false;

if (idade >= 18 || nome === "Pedro") {
  podeEntrar = true;
} else {
  console.log("NÃO ENTRA!!!");
}

console.log("Usuário pode entrar: ", podeEntrar);
