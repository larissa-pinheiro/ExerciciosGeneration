/* Escreva um algoritmo que leia o código de um item
(número inteiro entre 1 e 6) e a quantidade comprada
deste item(número inteiro).A seguir, mostre na tela
o valor total da conta e o nome do produto que foi comprado. 
*/

const leia = require("readline-sync");
let codigo, quantidade, valorTotal;
let produtoSelecionado, opcaoInvalida, quantidadeInvalida;

const produto = [
  { nome: 'Cachorro Quente', preco: 10.00 },
  { nome: 'X-Salada', preco: 15.00 },
  { nome: 'X-Bacon', preco: 18.00 },
  { nome: 'Bauru', preco: 12.00 },
  { nome: 'Refrigerante', preco: 8.00 },
  { nome: 'Suco de Laranja', preco: 13.00 }
]

console.log('+-----------------------------------------------+');
console.log('|                 MENU DE LANCHES               |');
console.log('+-----------------------------------------------+');
console.log('| 1 - Cachorro Quente ................ R$ 10.00 |');
console.log('| 2 - X-Salada ....................... R$ 15.00 |');
console.log('| 3 - X-Bacon ........................ R$ 18.00 |');
console.log('| 4 - Bauru .......................... R$ 12.00 |');
console.log('| 5 - Refrigerante ................... R$  8.00 |');
console.log('| 6 - Suco de Laranja ................ R$ 13.00 |');
console.log('+-----------------------------------------------+');
console.log('                                                 ');

do {
  codigo = leia.questionInt(console.log('+--------------- Digite uma opção (1 a 6) -------------+'));
  opcaoInvalida = codigo < 1 || codigo > 6;
  if (opcaoInvalida) {
    console.log('Opção inválida! Digite um numero entre 1 e 6.')
  }
} while (opcaoInvalida)

console.log('                                                 ');

do {
  quantidade = leia.questionInt(console.log('+-------------- Digite a quantidade: -----------+'));
  quantidadeInvalida = quantidade <= 0;
  if (quantidadeInvalida) {
    console.log('Quantidade inválida! Digite um valor acima de 0.')
  }
} while (quantidadeInvalida)

console.log('                                                 ');

switch (codigo) {
  case 1:
    produtoSelecionado = produto[0]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  case 2:
    produtoSelecionado = produto[1]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  case 3:
    produtoSelecionado = produto[2]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  case 4:
    produtoSelecionado = produto[3]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  case 5:
    produtoSelecionado = produto[4]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  case 6:
    produtoSelecionado = produto[5]
    console.log(`Produto: ${produtoSelecionado.nome}`)
    calculaPreco(quantidade, produtoSelecionado.preco)
    break
  default:
    console.log('Digite um valor válido.')
    break
}

function calculaPreco(quantidade, preco) {
  valorTotal = quantidade * preco
}

console.log(`Valor total: ${valorTotal}`)