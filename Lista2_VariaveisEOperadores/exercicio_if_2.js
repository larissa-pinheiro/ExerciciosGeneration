/* Escreva um algoritmo que leia um número inteiro via teclado 
mostre na tela uma mensagem indicando se este número é par ou ímpar
e se o número é positivo ou negativo. */

const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero inteiro positivo ou negativo: ')

let numeroPar = numero % 2 === 0;
let numeroPositivo = numero >= 0;

if (numeroPar && numeroPositivo) {
  console.log(`O número ${numero} é par e positivo!`)
} else if (numeroPar && !numeroPositivo) {
  console.log(`O número ${numero} é par e negativo!`)
} else if (!numeroPar && numeroPositivo) {
  console.log(`O número ${numero} é ímpar e positivo`)
} else {
  console.log(`O número ${numero} é ímpar e negativo!`)
}