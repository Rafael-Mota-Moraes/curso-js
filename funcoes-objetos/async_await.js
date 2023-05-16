const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const aguardarComRetorno = async () => {
  await sleep(3000);
  return 30;
};

const aguardar = async () => {
  console.log("Passou", 2 ** 2);
  const resultado = await aguardarComRetorno();
  console.log(resultado);
  await sleep(1000);

  console.log("Passou", 3 ** 3);
  console.log("Passou", 4 ** 4);
};

aguardar();
