// 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
//número de vezes que a string aparece no array.

let frutas = ["maçã", "banana", "maçã", "uva", "banana", "maçã", "pera", "uva", "banana"];

let contagem = {};

for (let i = 0; i < frutas.length; i++) {
  let palavra = frutas[i];

  if (contagem[palavra] === undefined) {
    contagem[palavra] = 1;
  } else {
    contagem[palavra] = contagem[palavra] + 1;
  }
}

console.log("Quantidade de vezes que cada fruta aparece:");
console.log(contagem);