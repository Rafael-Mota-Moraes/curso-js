function calcular() {
  console.log("Passou");
}

const calcular2 = function (func) {
  console.log("calcular2");
  func();
  return 2;
};

const calcular3 = () => console.log("calcular3");

calcular();
const x = calcular2(calcular);
console.log(x);
calcular3();
