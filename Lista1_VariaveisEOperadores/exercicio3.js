/* Elabore um algoritmo em JavaScript, que leia o Salário
Bruto, o Adicional Noturno, as Horas Extras, os Descontos
de um Colaborador e exiba na tela o Salário Líquido. */

const leia = require("readline-sync");

let salarioBruto, periodoNoturno, adicionalNoturno;
let horasExtras, descontos, salarioLiquido;

console.log('+----- CÁLCULO DE SALÁRIO LÍQUIDO -----+')
salarioBruto = leia.questionFloat('Informe o Salario Bruto: ')

periodoNoturno = leia.keyInYNStrict('Trabalha no periodo Noturno?')
if (periodoNoturno === true) {
  adicionalNoturno = leia.questionFloat('Informe o Adicional Noturno: ')
}

valorHoraExtra = leia.questionFloat('Informe o valor da hora extra: ')
horasExtras = leia.questionInt('Informe quantas horas extras: ')
descontos = leia.questionFloat('Informe os descontos: ')

salarioLiquido = salarioBruto + adicionalNoturno + (valorHoraExtra * horasExtras) - descontos
console.log(`Salário líquido: ${salarioLiquido}`)