/* Escreva um algoritmo, que leia 2 números inteiros via teclado,
onde o primeiro número deve ser menor do que o segundo número.
Caso contrário, deve ser exibida uma mensagem na tela informando
que o intervalo é inválido e sair do programa. No intervalo
informado, mostre na tela todos os números que são múltiplos de 3 e 5. */

const leia = require("readline-sync");
let numero1, numero2;

console.log('Informe 2 números de um intervalo, onde o primeiro deve ser menor que o segundo')
numero1 = leia.questionInt('Digite o primeiro numero inteiro: ')
numero2 = leia.questionInt('Digite o segundo numero inteiro: ')

if (numero2 > numero1) {
  console.log(`No intervalo entre ${numero1} e ${numero2}: `)

  for (let i = numero1; i <= numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é múltiplo de 3 e 5`)
    }
  }
} else {
  console.log('Intervalo inválido!')
}