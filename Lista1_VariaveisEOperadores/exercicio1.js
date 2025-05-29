/* Dado o Fluxograma, desenvolva o algoritmo abaixo na Linguagem JavaScript:
Inicio -> Digite o Salário -> Leia o Salário -> Digite o Abono -> Leia o Abono ->
  NovoSalário = Salário + Abono -> Exibe o NovoSalário -> Fim */

const leia = require("readline-sync");

let salario, abono, novoSalario;

console.log('+----- CÁLCULO DE SALÁRIO COM ABONO -----+')
salario = leia.questionFloat('Digite o Salario: ')
abono = leia.questionFloat('Digite o Abono: ')

novoSalario = salario + abono;
console.log(`Novo Salário: ${novoSalario.toFixed(2)}`)