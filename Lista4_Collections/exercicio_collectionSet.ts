/* Escreva um programa para criar uma Collection Set do tipo number.
O programa deverá solicitar ao usuário, que ele digite via teclado
10 valores inteiros não repetidos e adicione - os individualmente
na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set.  */

import leia from 'readline-sync';

const setNumeros: Set<number> = new Set<number>();
let numero: number;

console.log('+----------------------------------------------+')
console.log('|      ADICIONAR 10 NÚMEROS NÃO REPETIDOS      |');
console.log('+----------------------------------------------+\n');


for (let i = 0; i < 10; i++) {
  do {
    numero = leia.questionInt(`Adicione o ${i + 1}o numero: `);
    if (setNumeros.has(numero)) {
      console.log('Você já adicionou esse número. Favor inserir um diferente.');
    }
  } while (setNumeros.has(numero));
  
  setNumeros.add(numero);
}

for (numero of setNumeros) {
  console.log(numero)
}