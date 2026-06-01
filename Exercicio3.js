// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
// "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = 3.4;

if (nota >= 6 && nota <= 10) {
    console.log("Aprovado!");
} else if (nota >= 3.5 && nota < 6) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}