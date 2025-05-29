/* Dado um vetor contendo 10 números inteiros não ordenados e não
repetidos, construa um algoritmo que consiga pesquisar dados no vetor,
onde o usuário irá digitar um número e o programa deve exibir na tela
a posição deste número no vetor. Caso o número não seja encontrado,
a mensagem: “Não foi encontrado!” deve ser exibida na tela. */

const leia = require("readline-sync");

let vetor = [4, 2, 1, 9, 7, 11, 53, 6, 10, 72];

do {
  numero = leia.questionInt('|---------- Pesquise um numero: ----------| \n');

  if (vetor.includes(numero)) {
    console.log(`O número ${numero} está localizado na posição ${vetor.indexOf(numero)}`)
  } else {
    console.log('Não foi encontrado!')
  }

  let sair = leia.keyInYNStrict('Deseja sair?')
  if (sair === true) break;
} while (true)