/* Escreva um programa para criar uma Collection Array do tipo number,
inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário,
que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array,
exiba na tela a posição deste número na Collection. Caso o número não seja
encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! */

import leia from 'readline-sync';

const listaNumeros: Array<number> = [7, 11, 2, 8, 5, 3, 1, 9, 10, 14];
let numero: number;
let desejaAdicionarNumero: boolean;
let continuar: boolean;

console.log('+----------------------------------------------+')
console.log('|                BUSCA DE NÚMEROS              |');
console.log('+----------------------------------------------+\n');

do {
  numero = leia.questionInt('|------------ Pesquise um numero: -------------| \n');
  
  if (listaNumeros.includes(numero)) {
    console.log(`O número ${numero} está localizado na posição: ${listaNumeros.indexOf(numero)}\n`)
  } else {
    desejaAdicionarNumero = leia.keyInYNStrict(`O numero ${numero} nao foi encontrado! Deseja adiciona-lo?`)
    if (desejaAdicionarNumero === true) {
      listaNumeros.push(numero);

      console.log(`O número ${numero} foi adicionado com sucesso na posição ${listaNumeros.indexOf(numero)}!`)
      console.log(`A lista ficou assim: ${listaNumeros.join(', ')}`)
    }
  }

  continuar = leia.keyInYNStrict('Quer pesquisar outro numero?\n')
} while (continuar === true)