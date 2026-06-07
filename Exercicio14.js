// 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
// sobre salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até
// R$350,00.

const prompt = require("prompt-sync")();

function pesquisaHabitantes() {
  let somaFilhos = 0;
  let somaSalarios = 0;
  let maiorSalario = 0;
  let salariosAte350 = 0;
  let totalPessoas = 0;

  let continuar = "S";

  while (continuar === "S" || continuar === "s") {
    let salario = parseFloat(prompt("Digite o salário da pessoa: "));
    let filhos = parseInt(prompt("Digite o número de filhos: "));

    somaSalarios = somaSalarios + salario;
    somaFilhos = somaFilhos + filhos;
    totalPessoas++;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      salariosAte350++;
    }

    continuar = prompt("Deseja inserir outra pessoa? Digite S para sim ou N para não: ");
  }

  if (totalPessoas > 0) {
    let mediaSalario = somaSalarios / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentual350 = (salariosAte350 / totalPessoas) * 100;

    console.log("--------------------------------------------");
    console.log("---------------- RESULTADOS ----------------");
    console.log("--------------------------------------------\n");
    console.log(`Média de salário: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual com salário até R$350,00: ${percentual350.toFixed(2)}%`);
    console.log("\n--------------------------------------------");
  }
}

pesquisaHabitantes();