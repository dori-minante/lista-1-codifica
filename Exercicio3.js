// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
// "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite a nota do aluno: "));

if (nota >= 6) {
    console.log("Aprovado!");
} else if (nota >= 3.5 && nota < 6) {
    console.log("Recuperação!");
} else if (nota >= 0 && nota < 3.5) {
    console.log("Reprovado!");
} else {
    console.log("Nota inválida! Por favor digite uma nota entre 0 e 10.");
}