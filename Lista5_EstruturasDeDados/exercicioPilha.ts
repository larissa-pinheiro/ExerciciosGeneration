/* Escreva um programa contendo uma Collection Stack(Pilha) de
Objetos string, para organizar a retirada de livros de uma pilha.

O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado.

Caso a pilha esteja vazia, ao tentar retirar um livro da pilha,
o programa deverá informar que a pilha está vazia. */

import leia from 'readline-sync';
import { Stack } from './estruturaPilha';

const pilha = new Stack<string>;
let nomeLivro: string;
let opcao: number;
let opcaoInvalida: boolean;

console.log('+-------------------------------------------+');
console.log('|              PILHA DE LIVROS              |');
console.log('+-------------------------------------------+');
console.log('| 1 - Adicionar livro na pilha              |');
console.log('| 2 - Listar todos os livros                |');
console.log('| 3 - Retirar livro da pilha                |');
console.log('| 0 - Sair                                  |');
console.log('+-------------------------------------------+\n');

do {
  do {
    opcao = leia.questionInt(console.log('+--------- Digite uma opção (0 a 3) --------+'));
    opcaoInvalida = opcao < 0 || opcao > 3;
    if (opcaoInvalida) {
      console.log('Opção inválida! Digite um numero entre 0 e 3.')
    }
  } while (opcaoInvalida)

  switch (opcao) {
    case 1:
      nomeLivro = leia.question('Informe o nome do livro: ')
      if (!pilha.contains(formatarNome(nomeLivro))) {
        pilha.push(formatarNome(nomeLivro).trim())
        console.log('Pilha:\n')
        pilha.printStack()

        console.log('\nLivro adicionado!')
      } else {
        console.log(`O livro ${nomeLivro} já existe na base de dados.`)
      }
      break
    case 2:
      if (pilha.count() > 0) {
        console.log('Lista de livros na pilha: \n')
        pilha.printStack();
      } else {
        console.log('A pilha está vazia!')
      }
      break
    case 3:
      if (pilha.count() > 0) console.log(`O livro ${pilha.peek()} foi retirado da pilha!`)
      pilha.pop();
      break
    default:
      console.log('Programa Finalizado!')
      break
  }
} while (opcao != 0);

function formatarNome(nome: string) {
  return nome.split(' ').map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()).join(' ');
}