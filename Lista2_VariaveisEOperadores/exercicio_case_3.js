/* Escreva um algoritmo que simule uma Calculadora simples.
O programa deverá ler dois números reais: numero1 e numero2,
e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4).
A seguir, mostre na tela o resultado da operação entre os 2 números.
Caso o número da operação esteja fora do intervalo entre 1 e 4,
mostre a mensagem na tela Operação Inválida! */

const leia = require("readline-sync");

let codigo, numero1, numero2, operacao;

console.log('+-------------------------------+');
console.log('|     OPERAÇÕES MATEMÁTICAS     |');
console.log('+-------------------------------+');
console.log('| 1 - Soma                      |');
console.log('| 2 - Subtração                 |');
console.log('| 3 - Multiplicação             |');
console.log('| 4 - Divisão                   |');
console.log('+-------------------------------+');
console.log('                                 ');

do {
  codigo = leia.questionInt(console.log('+----- Digite uma opção (1 a 4) -----+'));
  opcaoInvalida = codigo < 1 || codigo > 4;
  if (opcaoInvalida) {
    console.log('Operação inválida!')
  }
} while (opcaoInvalida)

numero1 = leia.questionFloat('+----- Digite o primeiro numero real -----+');
console.log('                                                 ');
numero2 = leia.questionFloat('+----- Digite o segundo numero real -----+');
console.log('                                                 ');

switch (codigo) {
  case 1:
    operacao = numero1 + numero2;
    console.log(`${numero1} + ${numero2} = `, operacao)
    break
  case 2:
    operacao = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = `, operacao)
    break
  case 3:
    operacao = numero1 * numero2;
    console.log(`${numero1} * ${numero2} = `, operacao)
    break
  case 4:
    operacao = numero1 / numero2;
    console.log(`${numero1} / ${numero2} = `, operacao)
    break
  default:
    console.log('Operação inválida!');
    break
}