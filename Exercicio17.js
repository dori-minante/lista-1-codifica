// 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
//idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.

let pessoa = {
  nome: "Ana Maria Toledo",
  idade: 45
};

console.log(`A idade de ${pessoa.nome} é ${pessoa.idade} anos.`);

pessoa.email = "anamariatoldo@email.com";

console.log("Dados atualizados:");
console.log(pessoa);