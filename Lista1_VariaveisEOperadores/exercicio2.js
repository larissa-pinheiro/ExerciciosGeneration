/* Elabore um algoritmo em JavaScript que leia 4 notas de um
participante e exiba na tela a média final do participante.  */

const leia = require("readline-sync");

let notas = new Array(4);
let soma = 0;
let media;

console.log('Calcule a média de 4 notas')
for (let i = 0; i < notas.length; i++) {
  notas[i] = leia.questionFloat(`Digite a nota ${i + 1}: `)
}

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

media = soma / notas.length;
console.log(`Média final: ${media.toFixed(2)}`)



