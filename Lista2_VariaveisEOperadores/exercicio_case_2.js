/* Escreva um algoritmo que leia o cargo do Colaborador(string),
o Código do Cargo do Colaborador(número inteiro entre 1 e 6)
e o Salário(número real).A seguir, mostre na tela o cargo do Colaborador,
o Cargo e o novo Salário reajustado. */

const leia = require("readline-sync");
let codigo, colaborador, salario, novoSalario;
let cargoSelecionado, opcaoInvalida;

const cargos = [
  { cargo: 'Gerente', reajuste: 0.1 },
  { cargo: 'Vendedor', reajuste: 0.07 },
  { cargo: 'Supervisor', reajuste: 0.09 },
  { cargo: 'Motorista', reajuste: 0.06 },
  { cargo: 'Estoquista', reajuste: 0.05 },
  { cargo: 'Técnico de TI', reajuste: 0.08 }
]

console.log('+-----------------------------------------------+');
console.log('|               CARGOS PARA REAJUSTE            |');
console.log('+-----------------------------------------------+');
console.log('| 1 - Gerente ................... Reajuste: 10% |');
console.log('| 2 - Vendedor ................... Reajuste: 7% |');
console.log('| 3 - Supervisor ................. Reajuste: 9% |');
console.log('| 4 - Motorista .................. Reajuste: 6% |');
console.log('| 5 - Estoquista ................. Reajuste: 5% |');
console.log('| 6 - Técnico de TI .............. Reajuste: 8% |');
console.log('+-----------------------------------------------+');
console.log('                                                 ');

colaborador = leia.question(console.log('Digite o nome do colaborador: '));

do {
  codigo = leia.questionInt(console.log('+--------------- Digite uma opção (1 a 6) -------------+'));
  opcaoInvalida = codigo < 1 || codigo > 6;
  if (opcaoInvalida) {
    console.log('Opção inválida! Digite um numero entre 1 e 6.')
  }
} while (opcaoInvalida)

console.log('                                                 ');

salario = leia.questionInt(console.log('+--------------- Digite o salário atual -------------+'))

console.log('                                                 ');

switch (codigo) {
  case 1:
    cargoSelecionado = cargos[0]
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  case 2:
    cargoSelecionado = cargos[1]
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  case 3:
    cargoSelecionado = cargos[2]
    console.log(`${colaborador}`)
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  case 4:
    cargoSelecionado = cargos[3]
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  case 5:
    cargoSelecionado = cargos[4]
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  case 6:
    cargoSelecionado = cargos[5]
    console.log(`cargos: ${cargoSelecionado.cargo}`)
    calculaReajuste(cargoSelecionado.reajuste)
    break
  default:
    console.log('Digite um valor válido.')
    break
}

function calculaReajuste(reajuste) {
  novoSalario = salario + (reajuste * salario)
}

console.log(`Salário: R$ ${novoSalario.toFixed(2)}`)