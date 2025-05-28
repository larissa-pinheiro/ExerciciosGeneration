/* Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária.
O programa deverá ler o tipo da operação a ser realizada com número inteiro entre 1 e 3
e o valor a ser depositado ou sacado(somente nas opções 2 e 3). Considere que um saque só
pode ser realizado caso haja saldo suficiente.Ao final de cada operação, exiba o novo Saldo
na tela.A variável saldo(número real), será inicializada com o valor de R$ 1000.00. Caso o
número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida! */

const leia = require("readline-sync");
let saldo = 1000.00;
let valorOperacao, valorInvalido;

console.log('+-------------------------------+');
console.log('|      OPERAÇÕES BANCÁRIAS      |');
console.log('+-------------------------------+');
console.log('| 1 - Saldo                     |');
console.log('| 2 - Saque                     |');
console.log('| 3 - Depósito                  |');
console.log('| 4 - Sair                      |');
console.log('+-------------------------------+');
console.log('                                 ');

do {
  do {
    codigo = leia.questionInt(console.log(`+----- Digite uma opção (1 a 4) -----+ \n`));
    opcaoInvalida = codigo < 1 || codigo > 4;
    if (opcaoInvalida) {
      console.log('Operação inválida!')
    }
  } while (opcaoInvalida)


  switch (codigo) {
    case 1:
      console.log('Operação - Saldo\n')
      console.log(`Saldo: ${saldo.toFixed(2)}`)
      break
    case 2:
      console.log('Operação - Saque\n')
      recebeValorOperacao('Sacar')
      if (saldo >= valorOperacao) {
        saldo -= valorOperacao
        console.log(`Novo saldo: ${saldo.toFixed(2)}`)
      } else {
        console.log('Saldo insuficiente!')
      }
      break
    case 3:
      console.log('Operação - Depósito\n')
      recebeValorOperacao('Depositar')
      saldo += valorOperacao
      console.log(`Novo saldo: ${saldo.toFixed(2)}`)
      break
  }
} while (codigo >= 1 && codigo <= 3)

function recebeValorOperacao(tipoOperacao) {
  do {
    valorOperacao = leia.questionFloat(`+----- Digite um valor para ${tipoOperacao} -----+ \n`);
    valorInvalido = valorOperacao <= 0;
    if (valorInvalido) {
      console.log('Valor inválido!')
    }
  } while (valorInvalido)
}