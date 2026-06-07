// 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
//quantidade de elementos negativos da linha correspondente de M.

const prompt = require("prompt-sync")();

const LINHAS = 6;
const COLUNAS = 8;

let matriz = [];
let vetorC = [];

for (let linha = 1; linha <= LINHAS; linha++) {
  matriz[linha] = [];

  for (let coluna = 1; coluna <= COLUNAS; coluna++) {
    matriz[linha][coluna] = parseInt(
      prompt(`Digite o valor de M[${linha}][${coluna}]: `)
    );
  }
}

for (let linha = 1; linha <= LINHAS; linha++) {
  let contadorNegativos = 0;

  for (let coluna = 1; coluna <= COLUNAS; coluna++) {
    if (matriz[linha][coluna] < 0) {
      contadorNegativos++;
    }
  }

  vetorC[linha] = contadorNegativos;
}

console.log(`Resultado: quantidade de negativos por linha`);

for (let linha = 1; linha <= LINHAS; linha++) {
  console.log(`C[${linha}] = ${vetorC[linha]} negativo(s)`);
}
