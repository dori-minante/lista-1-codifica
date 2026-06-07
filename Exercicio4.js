// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

console.log("=======================================================");
console.log("=================== Menu de opções ====================");
console.log("=======================================================\n");
console.log("1 - Mensagem sobre JavaScript");
console.log("2 - Mensagem sobre a +praTi");
console.log("3 - Sair do programa\n");
console.log("=======================================================\n")

let opcao = parseInt(prompt("Digite a opção desejada: "));

switch (opcao) {
  case 1:
    console.log("JavaScript é uma linguagem muito usada na web. Comece a aprender hoje mesmo!");
    break;

  case 2:
    console.log("A +praTi é uma plataforma de cursos online que oferece uma variedade de cursos para ajudar você a desenvolver suas habilidades, inclusive sobre JavaScript! Acesse o site https://maisprati.com.br/ para saber mais.");
    break;

  case 3:
    console.log("Encerrando o programa...");
    break;

  default:
    console.log("Opção inválida!");
}

