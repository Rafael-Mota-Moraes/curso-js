const qualquer = {
  a: "a",
  b: "b"
};

const outro = { ...qualquer };
outro.c = "c";

console.log(outro);
console.log(qualquer);
