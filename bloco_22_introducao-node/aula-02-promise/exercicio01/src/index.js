const {num1, num2, num3} = require('./imputsValue');

const sum = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if ( typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
      reject(new Error("Informe apenas números"));
    }
    const confere = () => {
      const total = (num1 + num2) * num3;
      total > 50 ? resolve(total) : reject(new Error("Valor muito baixo"));
    };
    confere();
  });
};

async function main() {
  try {
    const total = await sum(num1, num2, num3);
    console.log(`Total é: ${total}`);
  } catch (err) {
    console.log(err);
  }
}

main();
