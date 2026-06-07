// 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

function somaVendasPorVendedor(listaVendas) {
  let resumo = {};

  for (let i = 0; i < listaVendas.length; i++) {
    let vendedor = listaVendas[i].vendedor;
    let valor = listaVendas[i].valor;

    if (resumo[vendedor] === undefined) {
      resumo[vendedor] = valor;
    } else {
      resumo[vendedor] = resumo[vendedor] + valor;
    }
  }

  return resumo;
}

let vendas = [
    { vendedor: "Paulo", valor: 150 },
    { vendedor: "Marcos", valor: 200 },
    { vendedor: "Paulo", valor: 50 },
    { vendedor: "Ana", valor: 300 },
    { vendedor: "Marcos", valor: 100 },
    { vendedor: "Ana", valor: 500 }
];

let resultado = somaVendasPorVendedor(vendas);

console.log("Resumo de vendas por vendedor:");
console.log(resultado);