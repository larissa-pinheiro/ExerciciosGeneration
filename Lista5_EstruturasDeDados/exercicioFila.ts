/* Escreva um programa contendo uma Collection Queue(Fila) de Objetos do tipo
string, para organizar uma fila por ordem de chegada dos Clientes de um Banco.

O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado.

Caso a fila esteja vazia, o programa deverá informar que a fila está vazia
ao tentar retirar(chamar) um cliente da fila. */

import leia from 'readline-sync';
import { Queue } from './estruturaFila';

const fila = new Queue<string>()
let nomeCliente: string;
let opcaoInvalida: boolean;
let codigo: number;

console.log('+-------------------------------------------+');
console.log('|                MENU DA FILA               |');
console.log('+-------------------------------------------+');
console.log('| 1 - Adicionar cliente na fila             |');
console.log('| 2 - Listar todos os clientes              |');
console.log('| 3 - Retirar cliente da fila               |');
console.log('| 0 - Sair                                  |');
console.log('+-------------------------------------------+\n');

function formatarNome(nome: string) {
  return nome.split(' ').map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()).join(' ');
}

do {
  do {
    codigo = leia.questionInt(console.log('+--------- Digite uma opção (0 a 3) --------+'));
    opcaoInvalida = codigo < 0 || codigo > 3;
    if (opcaoInvalida) {
      console.log('Opção inválida! Digite um numero entre 0 e 3.')
    }
  } while (opcaoInvalida)

  switch (codigo) {
    case 1:
      nomeCliente = leia.question('Informe o nome do cliente: ')
      if (!fila.contains(formatarNome(nomeCliente))) {
        fila.enqueue(formatarNome(nomeCliente))
        console.log('Fila:\n')
        fila.printQueue()

        console.log('\nCliente adicionado!')
      } else {
        console.log(`O nome ${nomeCliente} já existe na base de dados.`)
      }
      break
    case 2:
      if (fila.count() > 0) {
        console.log('Lista de clientes na fila: \n')
        fila.printQueue();
      } else {
        console.log('A fila está vazia!')
      }
      break
    case 3:
      if (fila.count() > 0) console.log(`O cliente ${fila.peek()} foi chamado!`)
      fila.dequeue();
      break
    default:
      console.log('Programa Finalizado!')
      break
  }
} while (codigo != 0);