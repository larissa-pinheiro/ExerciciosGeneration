/* Escreva um algoritmo, que leia números inteiros via teclado,
até que o número zero seja digitado. Ao final, mostre na tela
a soma de todos os números digitados, que sejam positivos.
Use o laço de repetição Do While. */

const leia = require("readline-sync");

let numero
let soma = 0;

console.log('+---------------------------------------+');
console.log('|------ SOMA DE NÚMEROS POSITIVOS ------|');
console.log('+---------------------------------------+');
console.log('                                         ');
console.log('Digite 0 caso queira encerrar.           ');
console.log('                                         ');

do {
  numero = leia.questionInt('|---------- Digite um numero: ----------| \n');
  if (numero === 0) break;

  if (numero > 0) {
    soma += numero;
  }
} while (true)

console.log(`A soma dos números positivos é: ${soma}`)




