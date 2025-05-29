/* Desenvolva um algoritmo que leia 3 valores inteiros
A, B e C e imprima na tela se a soma de A + B é maior,
menor ou igual a C.

Na construção do Algoritmo, utilize os seguintes conteúdos:
Entrada e Saída de dados
Operadores
Laço Condicional IF */

const leia = require('readline-sync');

let A = leia.questionInt('Digite o valor de A: ');
let B = leia.questionInt('Digite o valor de B: ');
let C = leia.questionInt('Digite o valor de C: ');
let somaAB = A + B;

if ((somaAB) > C) {
  console.log(`${A} + ${B} = ${somaAB} > ${C}`)
  console.log('A soma de A + B é maior do que C`')
} else if ((somaAB) < C) {
  console.log(`${A} + ${B} = ${somaAB} < ${C}`)
  console.log('A soma de A + B é menor do que C')
} else {
  console.log(`${A} + ${B} = ${somaAB} = ${C}`)
  console.log('A soma de A + B é igual a C')
}