//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite o peso em kg: "));
let altura = parseFloat(prompt("Digite a altura em metros: "));

let imc = peso / (altura * altura);

console.log("O seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Você está na categoria: Baixo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você está na categoria: Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está na categoria: Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Você está na categoria: Obesidade I");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Você está na categoria: Obesidade II");
} else {
    console.log("Você está na categoria: Obesidade III");
}

// Referencias para classificação do IMC: https://www.tuasaude.com/imc/

