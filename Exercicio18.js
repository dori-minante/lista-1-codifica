// 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
//strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.

let dados = {
  nome: "Bianca Silva",
  idade: 30,
  notas: [8, 9, 10, 10],
  cidade: "São Paulo",
  telefones: ["1111-1111", "2222-2222"],
  numeros: [1, 2, 3, 4]
};

function retornarArrays(objeto) {
  let novoObjeto = {};

  for (let chave in objeto) {
    if (Array.isArray(objeto[chave])) {
      novoObjeto[chave] = objeto[chave];
    }
  }

  return novoObjeto;
}

let resultado = retornarArrays(dados);

console.log("Novo objeto apenas com propriedades que são arrays:");
console.log(resultado);