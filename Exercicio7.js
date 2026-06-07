//7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
//média aritmética desses números.

const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let numDigitados = 0;

numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));

while (numero !== 0) {
  soma = soma + numero; 
  numDigitados++;
  numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));
}

if (numDigitados > 0) {
  let media = soma / numDigitados;
  console.log(`A média aritmética dos números digitados é: ${media}`);
} else {
  console.log("Nenhum número foi digitado! Tente novamente.");
}
