const teste1 = (callback) => {
  setTimeout(() => {
    console.log("test 1");
  }, 600);
};

const teste2 = (callback) => {
  setTimeout(() => {
    console.log("test 2");
    callback();
  }, 200);
};

const teste3 = (callback) => {
  setTimeout(() => {
    console.log("test 3");
  }, 300);
};

const teste4 = (callback) => {
  setTimeout(() => {
    console.log("test 4");
  }, 300);
};

const fnCallback = () => {
  console.log("Salvou o usuario");
};

teste1();
console.log(1 + 1);
teste2(fnCallback);
console.log(2 + 2);
teste3();
teste4();
