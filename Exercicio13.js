// 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
// seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// ○ Matrícula:
// ○ Nome:
// ○ Salário bruto:
// ○ Dedução INSS:
// ○ Salário líquido:
// ○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
// redução do INSS).

const prompt = require("prompt-sync")();

for (let i = 1; i <= 80; i++) {
  console.log(`Funcionário ${i}`);

  let matricula = prompt("Digite a matrícula: ");
  let nome = prompt("Digite o nome: ");
  let salarioBruto = parseFloat(prompt("Digite o salário bruto: "));

  let descontoInss = salarioBruto * 0.12;
  let salarioLiquido = salarioBruto - descontoInss;

  console.log("=======================================================\n");
  console.log("===================== CONTRACHEQUE ====================\n");
  console.log("=======================================================\n");
  console.log(`Matrícula: ${matricula}`);
  console.log(`Nome: ${nome}`);
  console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${descontoInss.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
  console.log("\n=======================================================\n");
}