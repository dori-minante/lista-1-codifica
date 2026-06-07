//9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let primeiroNumero = 0;
let segundoNumero = 1;

console.log("Os 10 primeros números da sequência de Fibonacci são:");
console.log(primeiroNumero);
console.log(segundoNumero);

for (let i = 3; i <= 10; i++) {
    let proximoNumero = primeiroNumero + segundoNumero;
    console.log(proximoNumero);
    primeiroNumero = segundoNumero;
    segundoNumero = proximoNumero;
}
