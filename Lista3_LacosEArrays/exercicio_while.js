/* Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros),
via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos
e o total de pessoas cuja idade, seja maior que 50 anos.A leitura dos dados deve
ser finalizada ao digitar uma idade negativa.
Use o laço de repetição While. */

const leia = require("readline-sync");
let idade;
let totalMenoresDe21 = 0;
let totalMaioresDe50 = 0;

console.log('+---------------------------------------+');
console.log('|---------- CONTADOR DE IDADES ---------|');
console.log('+---------------------------------------+');
console.log('                                         ');
console.log('Deseja sair? Digite um número negativo   ');
console.log('                                       ');

while (true) {
  idade = leia.questionInt('|---------- Digite uma idade: ----------| \n');

  if (idade < 0) break;

  if (idade < 21) {
    totalMenoresDe21++;
  } else if (idade > 50) {
    totalMaioresDe50++;
  }
}

console.log(`Total de pessoas menores de 21 anos: ${totalMenoresDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${totalMaioresDe50}`);