// 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
// e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require("prompt-sync")();

function calcularPesoIdeal(altura, sexo) {
  let pesoIdeal;

  if (sexo === "M" || sexo === "m") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "F" || sexo === "f") {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    pesoIdeal = 0;
  }

  return pesoIdeal;
}

let altura = parseFloat(prompt("Digite a altura em metros: "));
let sexo = prompt("Digite M para homem ou F para mulher: ");

let resultado = calcularPesoIdeal(altura, sexo);

if (resultado === 0) {
  console.log(`Sexo inválido.`);
} else {
  console.log(`Para a altura ${altura}, o peso ideal é ${resultado.toFixed(2)} kg.`);
}